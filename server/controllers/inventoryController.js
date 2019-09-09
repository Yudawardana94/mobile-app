const inventoriModel = require('../models/InventoryModel')

class InventoryController {
    static async getAll (req,res,next) {
        console.log('getall')
        try {
            let allInventory = await inventoriModel.find()
            console.log('disini')
            res.status(200).json(allInventory)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async getOne (req,res,next) {
        let id = req.params.id

        try {
            let found = await inventoriModel.findById(id)
            console.log(found)
            res.status(200).json(found)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async add (req,res,next) {
        let { kodeBarang, namaBarang, stock} = req.body
        let newInventory = { kodeBarang, namaBarang, stock}
        console.log(newInventory)

        try {
            let created = await inventoriModel.create(newInventory)
            console.log(created)
            res.status(201).json(created)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async update (req,res,next) {
        let id = req.params.id
        let {kodeBarang, namaBarang, stock} = req.body
        let update = {}

        if(kodeBarang) update.kodeBarang = kodeBarang
        if(namaBarang) update.namaBarang = namaBarang
        if(stock) update.stock = stock

        try {
            let updated = await inventoriModel.findByIdAndUpdate(id, update, {new: true})
            res.status(200).json(updated)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async delete (req,res,next) {
        let id = req.params.id
        try {
            let deleted = await inventoriModel.findByIdAndDelete(id)
            res.status(200).json(deleted)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = InventoryController