const express = require('express');
const placeController = require('../controller/Place-controller');
const router = express.Router();

router.get('/getCities', placeController.getCities)
.get('/:city', placeController.getCityPlaces);

exports.placeRouter = router;