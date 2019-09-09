const router = require('express').Router()
const barangController = require('../controllers/barangController')

router.get('/',barangController.getAll)
router.get('/:id',barangController.getOne)
router.post('/',barangController.add)
router.patch('/:id',barangController.update)
router.delete('/:id',barangController.delete)

module.exports = router