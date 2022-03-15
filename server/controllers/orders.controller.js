const {Order} = require('../models/orders.model');

module.exports.createOrder = (req,res) =>{
    const {desk,order,comment,status} = req.body;

    Order.create({
        desk,
        order,
        comment,
        status
    })
    .then(order => res.json(order))
    .catch(err=>{
        res.status(400).json(err)
    })
}

module.exports.getAllOrders = (req,res) => {
    Order.find({})
        .then(order => res.json(order))
        .catch(err=>res.json(err))
}

module.exports.getOrder = (req,res) => {
    Order.findOne({_id:req.params.id})
        .then(order => {
            res.json(order)
        })
        .catch(err=>{
            res.status(400).send('Error Id no disponible en la base de datos')
        })
}

module.exports.updateOrder = (req,res) => {
    Order.updateOne({_id:req.params.id},req.body,{runValidators:true})
    .then(updateOrder => res.json(updateOrder))
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports.deleteOrder = (req,res) => {
    Order.deleteOne({_id: req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.json(err))
}

module.exports.modifyStatus = (req,res) => {
    Order.updateOne({_id:req.params.id},{status:req.params.status})
    .then(updateOrder => res.json(updateOrder))
    .catch(err => {
        res.status(400).json(err)
    })
}

