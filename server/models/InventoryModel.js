const mongoose = require('mongoose')
const Schema = mongoose.Schema

let inventorySchema = new Schema ({
    kodeBarang: {
        type: String,
        ref: 'Barang'
    },
    namaBarang: {
        type: String,
        ref: 'Barang'
    },
    stock: {
        type: Number
    }
})

let Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory