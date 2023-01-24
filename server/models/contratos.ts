import {Schema, model} from "mongoose";

const contratosSchema = new Schema({
    contratos: {
        type: String,
        require: true,
    },
    montos:{
        type: Number,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    }
});

export default model ("Contratos", contratosSchema)