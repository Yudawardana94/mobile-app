const router = require('express').Router()
const pembelianController = require('../controllers/pembelianController')

router.get('/',pembelianController.getAll)
router.get('/:id',pembelianController.getOne)
router.post('/',pembelianController.add)
router.patch('/:id',pembelianController.update)
router.delete('/:id',pembelianController.delete)

module.exports = router