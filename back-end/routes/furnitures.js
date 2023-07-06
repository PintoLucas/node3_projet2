const express = require('express');
const router = express.Router();

const furnitureCtrl = require('../controllers/furnitures');
const auth = require('../middleware/auth');

router.get('/', furnitureCtrl.getAllFurnitures);
router.post('/add', furnitureCtrl.createFurniture);
router.get('/:name', furnitureCtrl.getOneFurniture);
router.put('/:name', furnitureCtrl.modifyFurniture);
router.delete('/:name', furnitureCtrl.deleteFurniture);

module.exports = router;
