const Pet = require("../models/models");

module.exports = {
    cbCreatePet: function(req,res){
        console.log('Inside cbCreatePet()');
        console.log(req.body);
        Pet.create(req.body)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPets: function(req,res){
        Pet.find().sort({petType: 1})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPet: function(req,res){
        Pet.findById({_id: req.params.id})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbUpdatePet: function(req,res){
        console.log('Inside cbUpdatePet()');
        console.log(req.body);
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, context: 'query' })
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbRemovePet: function(req,res){
        console.log('Inside cbRemovePet()');
        console.log(req.params.id);
        Pet.findByIdAndRemove(req.params.id)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    }
}