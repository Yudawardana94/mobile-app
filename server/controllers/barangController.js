const barangModel = require('../models/BarangModel')

class BarangModel {
    static async getAll(req,res,next) {
        console.log('get all barang')
        try {
            let allData = await barangModel.find()
            console.log(allData)
            res.status(200).json(allData)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async getOne(req,res,next) {
        console.log('get one barang')
        let id = req.params.id
        try {
            let found = await barangModel.findById(id)
            res.status(200).json(found)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async add(req,res,next) {
        let { kodeBarang, namaBarang, hargaJual, hargaBeli, satuan, kategori } = req.body
        let newBarang = { kodeBarang, namaBarang, hargaJual, hargaBeli, satuan, kategori }
        // kodeBarang = Number(kodeBarang)
        // hargaBarang = Number()

        try {
            let newData = await barangModel.create(newBarang)
            res.status(200).json(newData)
        } catch (error) {
            res.status(500).json(error)
        }
            
    }
    static async update(req,res,next) {
        console.log('update barang')
        let update = {}
        let { kodeBarang, namaBarang, hargaJual, hargaBeli, satuan, kategori } = req.body
        let _id = req.params.id

        if(kodeBarang) update.kodeBarang = kodeBarang;
        if(namaBarang) update.namaBarang = namaBarang;
        if(hargaJual) update.hargaJual = hargaJual;
        if(hargaBeli) update.hargaBeli = hargaBeli;
        if(satuan) update.satuan = satuan;
        if(kategori) update.kategori = kategori;

        console.log(update)
        try {
            let updated = await barangModel.findByIdAndUpdate({_id}, update, {new: true})
            console.log(updated)
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json(error)
        }
        
    }
    static async delete(req,res,next) {
        console.log('delete barang')
        let id = req.params.id
        try {
            let deleted = await barangModel.findByIdAndDelete(id)
            console.log(deleted)
            res.status(200).json(deleted)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BarangModel