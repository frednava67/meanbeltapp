const controller = require("../controllers/controller");

module.exports = function(app){
    app.get('/api/persons', controller.cbGetPersons)
    app.get('/api/persons/:id', controller.cbGetPerson)
    app.delete('/api/persons/:id', controller.cbRemovePerson)
    app.post('/api/persons', controller.cbCreatePerson)
    app.put('/api/persons/:id', controller.cbUpdatePerson)
}

