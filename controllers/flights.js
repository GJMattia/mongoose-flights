const Flight = require('../models/flight')

module.exports = {
    index,
    create,
    new: newFlight
};

async function index(req, res){
    const flights = await Flight.find().sort({departs: 1});
    res.render('flights/index', {
        flights, title: 'The Full Flight Index'
    })
};

function newFlight(req, res){
    res.render('flights/new', {errorMsg: '', title: 'New Flight'})
};

async function create(req, res){
    
    req.body.flightNo = parseInt(req.body.flightNo);
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err){
        console.log(err);
        res.render('flights/new', {errorMsg: err.message})
    }
}
