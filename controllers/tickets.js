const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function newTicket(req, res){
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: 'The Ticket Generator', flight });
}


async function create(req, res) {
    const flightId = req.params.id;
    const { seat, price } = req.body;

    try {
        const ticket = new Ticket({
            flight: flightId,
            seat,
            price,
        });

        // Save the ticket to the database
        await ticket.save();

        // Redirect back to the flight page or wherever you want
        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating ticket.');
    }
}