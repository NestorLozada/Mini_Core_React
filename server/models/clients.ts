import {Schema, model} from "mongoose";

const clientSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    id:{
        type: String,
        require: true
    }
});

export default model ("Clientes", clientSchema)