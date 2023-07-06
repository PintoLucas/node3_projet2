const express = require('express');
const router = express.Router();

const materialCtrl = require('../controllers/materials');
const auth = require('../middleware/auth');

router.get('/', materialCtrl.getAllMaterials);

module.exports = router;
