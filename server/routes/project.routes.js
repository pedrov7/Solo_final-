const ProjectController = require('../controllers/project.controller');

module.exports = function(app){
    app.post('/api/user', ProjectController.createUser);
    app.post('/login', ProjectController.authUser);
    app.get('/api/users', ProjectController.getAllUsers);
    app.delete("/api/user/:id",ProjectController.deleteUser)
}