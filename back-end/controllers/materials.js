const Material = require('../models/materials');

exports.getAllMaterials = (req, res, next) => {
    Material.find().then(
        (materials) => {
            res.status(200).json(materials);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};