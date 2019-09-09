const mongoose = require('mongoose')
const Schema = mongoose.Schema

let barangSchema = new Schema({
    kodeBarang: {
        type: Number,
        require: [true, 'kode barang harus diisi']
    },
    namaBarang: {
        type: String,
        require: [true, 'nama barang harus diisi']
    },
    hargaBeli: {
        type: Number,
        require: [true, 'harga beli harus diisi']
    },
    hargaJual: {
        type: Number,
        require: [true, 'harga jual harus diisi']
    },
    satuan: {
        type: String,
        require: [true, 'satuan harus diisi']
    },
    kategori: {
        type: String,
        require: [true, 'kategori harus diisi']
    }
})

let Barang = mongoose.model ('Barang', barangSchema)

module.exports = Barang