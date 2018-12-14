const controller = require("../controllers/controller");

module.exports = function(app){
    app.get('/api/pets', controller.cbGetPets)
    app.get('/api/pets/:id', controller.cbGetPet)

    app.delete('/api/pets/:id', controller.cbRemovePet)
    
    app.post('/api/pets', controller.cbCreatePet)
    
    app.put('/api/pets/:id', controller.cbUpdatePet)
}

