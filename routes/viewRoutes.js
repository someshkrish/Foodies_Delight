const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/recipe/:query', viewsController.getRecipes);

module.exports = router;
