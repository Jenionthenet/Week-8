const express = require('express')
const router = express.Router()
const models  = require('../models')

router.get('/:commentId', (req, res) => {
    const commentId = req.params.commentId

    models.Review.findByPk(commentId, {
        include: [
            {
                model: models.Trip,
                as: 'trip'
            }
        ]
    })
    .then(comment => {
        res.render('details'. comment)
    })
})


router.post('/add-comment', (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const tripId = req.body.tripId
    // console.log(title, botripId)
    const comment = models.Comment.build({
        title: title,
        comment: body,
        tripId: tripId
    })
    comment.save().then(savedComment => {
        res.redirect(`/trips/${tripId}`)
    })
} )


module.exports = router