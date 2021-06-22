const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/recipe', viewsController.getRecipes);
router.get('/favourites', viewsController.getFavourites);
router.get('/detail/:id', viewsController.getDetails);

module.exports = router;
