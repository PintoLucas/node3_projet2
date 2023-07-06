const Furniture = require('../models/furnitures');

exports.getAllFurnitures = (req, res, next) => {
    Furniture.find().then(
        (furnitures) => {
            res.status(200).json(furnitures);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.createFurniture = (req, res, next) => {
    const furniture = new Furniture({
        name: req.body.name,
        materiaux: req.body.materiaux,
        categorie: req.body.categorie
    });
    furniture.save().then(
        () => {
            res.status(201).json({
                message: 'Furniture saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneFurniture = (req, res, next) => {
    Furniture.findOne({
        name: req.params.name
    }).then(
        (furniture) => {
            res.status(200).json(furniture);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyFurniture = (req, res, next) => {
    const furnitureObject = req.file ?
        {
            ...JSON.parse(req.body.furniture)
        } : {...req.body};
    delete req.body.name;
    Furniture.updateOne({name: req.params.name}, {...furnitureObject}).then(
        () => {
            res.status(201).json({
                message: 'Furniture updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteFurniture = (req, res, next) => {
    Furniture.findOne({name: req.params.name})
        .then(Furniture.deleteOne({name: req.params.name})
            .then(
                () => {
                    res.status(200).json({
                        message: 'Furniture Deleted!'
                    });
                }
            )
            .catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            ))
}