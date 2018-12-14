const Person = require("../models");

module.exports = {
    cbCreatePerson: function(req,res){
        console.log('Inside cbCreatePerson()');
        console.log(req.body);
        Person.create(req.body)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPersons: function(req,res){
        Person.find({})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbGetPerson: function(req,res){
        Person.findById({_id: req.params.id})
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbUpdatePerson: function(req,res){
        console.log('Inside cbUpdatePerson()');
        console.log(req.body);
        Person.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    },
    cbRemovePerson: function(req,res){
        console.log('Inside cbRemovePerson()');
        console.log(req.params.id);
        Person.findByIdAndRemove(req.params.id)
            .then((data)=>res.json({message: "Success", data: data}))
            .catch((err)=>res.json({message: "Error", err: err}))            
    }
}