const mongoose = require ('mongoose')
const Schema = mongoose.Schema

let pembelianSchema = new Schema ({
    nomorPembelian: {
        type: Number
    },
    tanggalFaktur: {
        type: Date
    },
    nomorFaktur: {
        type: Number
    },
    namaSuplier: {
        type: String
    },
    kodeBarang: {
        type: Number
    },
    jumlah: {
        type: Number
    },
    harga: {
        type: Number
    },
    diskon: {
        type: Number
    },
    hargaTotal: {
        type: Number
    }
})

let Pembelian = mongoose.model('Pembelian', pembelianSchema)

module.exports = Pembelian