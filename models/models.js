const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/petshelterdb');

const SkillSchema = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})

const PetSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: [true, "Hold on there, partner, Name is required."], minlength: [3, "So sorry, Name field must be at least 3 characters long."]},
    petType: {type: String, required: [true, "Hold on there, partner, Pet Type is required."], minlength: [3, "So sorry, Pet Type field must be at least 3 characters long."]},
    description: {type: String, required: [true, "Hold on there, partner, Pet Type is required."], minlength: [3, "So sorry, Description field must be at least 3 characters long."]},
    likes: {type: Number},
    skills: [SkillSchema]
}, {timestamps: true})

PetSchema.plugin(uniqueValidator, { message: 'OMG, the field {PATH} absolutely must be unique.' });

// Store the Schema under the name 'Pet'
module.exports = mongoose.model('Pet', PetSchema);



