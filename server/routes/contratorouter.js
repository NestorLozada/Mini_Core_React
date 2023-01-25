const express = require("express");
const router = express();

const Contratos = require('../models/contratos')

router.get('/', async (req, res) =>{
    const contratos = await Contratos.find();
    console.log(contratos)
    res.json(contratos)
});
router.post('/', async (req, res)=>{
    const {contratos, montos, fecha, cliente_id} = req.body
    const contrat = new Clientes({contratos, montos, fecha, cliente_id})
    await contrat.save();

    console.log({status: 'Contrato recivido'})
})

module.exports = router;