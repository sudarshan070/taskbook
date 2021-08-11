let mongoose = require('mongoose')
let Schema = mongoose.Schema

let todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Next Up"
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

module.exports = mongoose.model("Todo", todoSchema)