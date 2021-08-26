const express = require('express')
const router = express.Router()
const models  = require('../models')



router.get('/add-trip/:continent', (req, res) => {
    const continent = req.params.continent
    models.Trip.findAll({
        where: {
            continent: {
                [Op.iLike]: continent
            }
        }
    }).then(trips => {
        res.render('trips/add-trip', {trips: trips})
    })
})

router.get('/add-trip', (req, res) => {
    models.Trip.findAll({})
    .then(trips => {
        res.render('trips/add-trip', {trips: trips})
    })
})

router.post('/add-trip', (req, res) => {

    const title = req.body.title
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate
    const imageUrl = req.body.imageUrl
    const continent = req.body.continent 
    

    const trip = models.Trip.build({
        title: title,
        departureDate: departureDate,
        returnDate: returnDate, 
        imageUrl: imageUrl,
        continent: continent

    })
    trip.save().then((savedTrip) => {
        console.log(savedTrip)
        res.redirect('/trips/add-trip')

    })
})

router.post('/add-trip/delete-trip', (req, res) => {
    const tripId = parseInt(req.body.tripId)

    models.Trip.destroy({
        where: {
            id: tripId
        }
    }).then(deletedTrip => {
        res.redirect('/trips/add-trip')
    })
})

module.exports = router