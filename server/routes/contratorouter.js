const express = require("express");
const router = express();

const Contratos = require('../models/contratos')
const Clientes = require('../models/clients')

router.get('/', async (req, res) =>{
    const contratos = await Contratos.find();
    console.log(contratos)
    res.json(contratos)
});
router.post('/', async (req, res)=>{
    const {contratos, montos, fecha, cliente_id} = req.body
    const contrat = new Contratos({contratos, montos, fecha, cliente_id})
    await contrat.save();

    console.log({status: 'Contrato recivido'})
    res.sendStatus(200)
});
router.get('/contratosfilter', async (req, res) =>{
    
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);
    const contratos_by_cliente = await Clientes.aggregate([
        {
        $lookup: {
            from: 'contrats',
            localField: '_id',   
            foreignField: 'cliente_id',
            as: 'contratos'
        }
        }
    ])
    const results = []
    contratos_by_cliente.forEach ( cliente =>{
        const filterContract = cliente.contratos.filter(contrato => {
            const fecha = contrato.fecha.getTime()
            return fecha >= startDate.getTime() && fecha <= endDate.getTime();
        })
        const totalMonto = cliente.contratos.reduce((total, contrato ) => total + contrato.montos, 0)
        const totalContrato = cliente.contratos.length
        results.push({
            cliente: cliente.name,
            totalContrato: totalContrato,
            totalMonto: totalMonto
        })
    })
    

    console.log(results)
    res.json(results)
});
module.exports = router;