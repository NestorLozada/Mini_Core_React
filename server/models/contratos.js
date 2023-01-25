const mongoose = require('mongoose')
const {Schema} = mongoose;

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
    },
    cliente_id:{
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('contrat', contratosSchema)