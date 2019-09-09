const router = require('express').Router()
const penjualanController = require('../controllers/penjualanController')

router.get('/',penjualanController.getAll)
router.get('/:id',penjualanController.getOne)
router.post('/',penjualanController.add)
router.patch('/:id',penjualanController.update)
router.delete('/:id',penjualanController.delete)

module.exports = router