const penjualanModel = require('../models/PenjualanModel')

class PenjualanController {
    static async getAll (req,res,next) {
        try {
            let allPenjualan = await penjualanModel.find()
            res.status(200).json(allPenjualan)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async getOne (req,res,next) {
        let id = req.params.id

        try {
            let found = await penjualanModel.findById(id)    
            res.status(200).json(found)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async add (req,res,next) {
        let { nomorPenjualan, namaKonsumen, nomorTelepon, kodeBarang, jumlah, hargaSatuan} = req.body
        let hargaTotal = hargaSatuan * jumlah
        let newPenjualan = { nomorPenjualan, namaKonsumen, nomorTelepon, kodeBarang, jumlah, hargaSatuan, hargaTotal}
        console.log(newPenjualan)
        try {
            let terjual = await penjualanModel.create(newPenjualan)
            res.status(201).json(terjual)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async update (req,res,next) {
        let id = req.params.id
        let { nomorPenjualan, namaKonsumen, nomorTelepon, kodeBarang, jumlah, hargaSatuan} = req.body
        let update = {}
        let searched = await penjualanModel.findById(id)
        
        if(nomorPenjualan) update.nomorPenjualan = nomorPenjualan
        if(namaKonsumen) update.namaKonsumen = namaKonsumen
        if(nomorTelepon) update.nomorTelepon = nomorTelepon
        if(kodeBarang) update.kodeBarang = kodeBarang
        if(jumlah) {
            update.jumlah = jumlah
            update.hargaTotal = jumlah * searched.hargaSatuan
        }
        if(hargaSatuan) {
            update.hargaSatuan = hargaSatuan
            update.hargaTotal = hargaSatuan * searched.jumlah
        }
        if(jumlah && hargaSatuan) {
            update.hargaTotal = hargaSatuan * jumlah
        }
        
        console.log(update)

        try {
            let updated = await penjualanModel.findByIdAndUpdate(id, update, { new: true})
            console.log(updated)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async delete (req,res,next) {
        let id = req.params.id
        try {
            let deleted = await penjualanModel.findByIdAndDelete(id)
            res.status(200).json(deleted)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PenjualanController