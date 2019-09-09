const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hash } = require('../helpers/bcrypts')

let userSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

userSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
})

let User = mongoose.model('User',userSchema)

module.exports = User