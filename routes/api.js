const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Define local auth middleware for API routes
function requireAuthApi(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ error: 'You must be logged in to place an order.' });
  }
  next();
}

router.get('/restaurants', apiController.getRestaurants);
router.get('/restaurants/:id/menu', apiController.getRestaurantMenu);
router.get('/orders/:id', apiController.getOrder);
router.post('/orders', requireAuthApi, apiController.createOrder);
router.get('/stats', apiController.getStats);

module.exports = router;