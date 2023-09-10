const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    deleteTicket
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

        // saves the ticket to the database
        await ticket.save();

        // redirects back to the flight page or wherever i specify 
        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.error(err);
    }
}

async function deleteTicket(req, res) {
    //takes in url id and makes it the tickets id
    const ticketId = req.params.id;
    try {
        // declares the ticket as it is looked up in the database
        const ticket = await Ticket.findById(ticketId);
        //declares the flight from the ticket item id so we can redirect later
        const flightId = ticket.flight;
        //looks up the ticket in the database and removes it
        await Ticket.findByIdAndRemove(ticketId);
        //redirects us to the page we were on based on the info stored in variable  
      res.redirect(`/flights/${flightId}`); 
    } catch (error) {
      console.error(error);
    }
  }