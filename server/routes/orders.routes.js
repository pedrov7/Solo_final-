const OrderController = require('../controllers/orders.controller');

module.exports = function(app){
    app.post('/api/order', OrderController.createOrder);
    app.get('/api/allorders', OrderController.getAllOrders);
    app.get('/api/order/:id',OrderController.getOrder);
    app.put('/api/order/:id', OrderController.updateOrder);
    app.delete('/api/order/:id', OrderController.deleteOrder);

    app.put('/api/order/status/:id/:status', OrderController.modifyStatus);
}
