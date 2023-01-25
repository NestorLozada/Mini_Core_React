const express = require("express");
const router = express();

const Clientes = require('../models/clients')

router.get('/', async (req, res) =>{
    const clientes = await Clientes.find();
    console.log(clientes)
    res.json(clientes)
});
router.post('/', async (req, res)=>{
    const {name,id} = req.body
    const clientes = new Clientes({name, id})
    await clientes.save();

    console.log({status: 'Recivido'})
})

module.exports = router;