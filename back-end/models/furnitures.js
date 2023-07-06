const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const furnituresSchema = mongoose.Schema({
    name : { type: String, unique: true },
    materiaux: { type: String },
    categorie: { type: String }
});

furnituresSchema.plugin(uniqueValidator);

//     materiaux: [{ type: String }],


module.exports = mongoose.model('furnitures', furnituresSchema);