const router = require('express').Router()
const User = require('./userRoute')
const Barang = require('./BarangRoute')
const Pembelian = require('./PembelianRoute')
const Penjualan = require('./PenjualanRoute')
const Inventory = require('./InventoryRoute')

router.use('/user', User)
router.use('/barang', Barang)
router.use('/pembelian', Pembelian)
router.use('/penjualan', Penjualan)
router.use('/inventory', Inventory)

module.exports = router