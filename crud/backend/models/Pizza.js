const mongoose= require('mongoose');
const pizzaSchema=mongoose.Schema({
    name:String,
    size:String,
})

const pizzaModel = mongoose.model('pizza',pizzaSchema);
module.exports = pizzaModel;