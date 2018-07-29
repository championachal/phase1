var dbPerson = require('../models/person')

var updatePerson = (req, res, next) => {
    if (!req.body.name) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    } else {
        console.log(req.body.pincode)
        dbPerson.findOneAndUpdate({ email: req.body.email, createdBy: req.decoded.email }, { $set: { age: req.body.age, 'address.pincode': req.body.pincode } }, (err, data) => {
            if (err) {
                next(err)
            } else {
                res.json({
                    success: true,
                    msg: " Data Updated"
                })
            }
        })
    }
}

module.exports = updatePerson