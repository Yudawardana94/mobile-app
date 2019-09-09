const router = require('express').Router()
const inventoryController = require('../controllers/inventoryController')

router.get('/',inventoryController.getAll)
router.get('/:id',inventoryController.getOne)
router.post('/',inventoryController.add)
router.patch('/:id',inventoryController.update)
router.delete('/:id',inventoryController.delete)

module.exports = router