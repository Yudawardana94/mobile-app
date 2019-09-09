const mongoose = require('mongoose')
const Schema = mongoose.Schema

let penjualanSchema = new Schema ({
    nomorPenjualan: {
        type: Number
    },
    namaKonsumen: {
        type: String
    },
    nomorTelepon: {
        type: Number
    },
    kodeBarang: {
        type: Number
    },
    jumlah: {
        type: Number
    },
    hargaSatuan: {
        type: Number
    },
    hargaTotal: {
        type: Number
    },
})

let Penjualan = mongoose.model('Penjualan',penjualanSchema)

module.exports = Penjualan