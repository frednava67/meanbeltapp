const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/personsdb');

const PersonSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: [true, "Name is required"], minlength: [1, "Name field cannot be empty"]},
    birthdate: {type: Date, // "2018-12-13T21:52:58.037Z"
        validate: {
            validator: function(d) {
                return (d < Date.now());
            },
            message: props => `${props.path} must be in the past!`
            },
        required: [true, "BirthDate field is required"],}
}, {timestamps: true})

PersonSchema.plugin(uniqueValidator);

// Store the Schema under the name 'Person'
module.exports = mongoose.model('Person', PersonSchema);



