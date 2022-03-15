const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    desk: {
        type: Number,
        required: [true, 'Número de mesa obligatorio']
    },
    order: [],
    comment: {
        type: String
    },
    status: {
        type: String
    }

}, { timestamps: true })


module.exports.Order = mongoose.model("Order", OrderSchema);