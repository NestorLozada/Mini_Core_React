const mongoose = require('mongoose')
const {Schema} = mongoose;

const clientSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    id:{
        type: Schema.Types.ObjectId,
        require: true
    },
    contrato_id :{
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('cliente', clientSchema)