import { json, Router } from "express";
import Contratos from "../models/contratos";
import Clients from "../models/clients";

const route = new Router() 
route.get ('/contratos',async (req,res) => {
    const contratos = await Contratos.find()
    req.send(contratos)
    
});
route.post ('/contratosPost', async (req, res) => {
    const {contratos, montos, fecha} = req.body
    const contrato = new Contratos({contratos, montos, fecha})
    await contrato.save()
    res.json(contrato)
});
route.get('contrato/:id',async (req, res) => {
    try{
        const contrato = await Contratos.findById(req.params.id);
        if (!contrato) return res.status(404).json({message: "Contrato no encontrado"})
    }catch (error){
        return res.status(500).send(error)
    }
    
});

/// CLIENTES
route.get ('/clientes',async (req, res) =>{
    const cliente = await Clients.find()
    req.sed(cliente)
});
route.post('/clientesPost',async (req, res) => {
    const {name, id} = req.body
    const cliente = new Clients({name, id})
    await cliente.save()
    res.json(cliente)
});
route.get('cliente/:id',async (req, res) => {
    try{
        const cliente = await Clients.findById(req.params.id);
        if (!cliente) return res.status(404).json({message: "Cliente no encontrado"})
    }catch (error){
        return res.status(500).send(error)
    }
    
});