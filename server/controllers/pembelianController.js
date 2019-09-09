const pembelianModel = require('../models/PembelianModel')

class PembelianController {
    static async getAll (req,res,next) {
        try {
            let allPembelian = await pembelianModel.find()
            console.log(allPembelian)
            res.status(200).json(allPembelian)   
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async getOne (req,res,next) {
        let id = req.params.id
        console.log(id)
        try {
            let found = await pembelianModel.findById(id)
            console.log(found)
            res.status(200).json(found)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async add (req,res,next) {
        console.log('ini di add new item')
        let {nomorPembelian, tanggalFaktur, nomorFaktur, namaSuplier, kodeBarang, jumlah, harga, diskon} = req.body
        let hargaTotal = (Number(harga) * Number(jumlah) * diskon ) / 100
        let newPembelian = {nomorPembelian, tanggalFaktur, nomorFaktur, namaSuplier, kodeBarang, jumlah, harga, diskon, hargaTotal}
        try {    
            let pembelianSuccess = await pembelianModel.create(newPembelian)
            console.log(pembelianSuccess)
            res.status(200).json(pembelianSuccess)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async update (req,res,next) {
        let id =req.params.id
        let update = {}
        let {nomorPembelian, tanggalFaktur, nomorFaktur, namaSuplier, kodeBarang, jumlah, harga, diskon} = req.body

        if(nomorPembelian) update.nomorPembelian = nomorPembelian
        if(tanggalFaktur) update.tanggalFaktur = tanggalFaktur
        if(nomorFaktur) update.nomorFaktur = nomorFaktur
        if(namaSuplier) update.namaSuplier = namaSuplier
        if(kodeBarang) update.kodeBarang = kodeBarang
        if(jumlah) update.jumlah = jumlah
        if(harga) update.harga = harga
        if(diskon) update.diskon = diskon
        console.log(update)

        try {
            let updated = await pembelianModel.findByIdAndUpdate( id, update, { new: true} )
            console.log(updated)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json(error)
        }

    }

    static async delete (req,res,next) {
        let id = req.params.id
        try {
            let deleted = await pembelianModel.findByIdAndDelete(id)
            console.log(deleted)
            res.status(200).json(deleted)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PembelianController