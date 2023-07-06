const mongoose = require('mongoose');

const materialsSchema = mongoose.Schema({
    Bois: {
        Matériaux: [{ type: String }],
        Entreprise: { type: String }
      },
      Fer: {
        Matériaux: [{ type: String }],
        Entreprise: { type: String }
      },
      Plastique: {
        Matériaux: [{ type: String }],
        Entreprise: { type: String }
      },
      Catégorie: [{ type: String }]
    });

module.exports = mongoose.model('materials', materialsSchema);