const mongoose = require('mongoose')
const uri = process.env.MONGO_CONNECTION ||'mongodb://localhost/Lozada_minicore'

mongoose.connect(uri)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports= mongoose;