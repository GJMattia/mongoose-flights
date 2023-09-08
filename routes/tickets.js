const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/new/:id', ticketsCtrl.new);

router.post('/:id', ticketsCtrl.create);

// router.post('/tickets/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;