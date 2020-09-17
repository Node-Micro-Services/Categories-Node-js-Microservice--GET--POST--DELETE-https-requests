const chalk = require("chalk");

const Category = require("../models/category");
exports.getCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    async function go() {
        await Category.findAll()
            .then((result) => {
                const res = (chalk.yellow.bold.inverse(JSON.stringify(result)));
                Result.push(result);
                res.status(200).json({
                    "result": Result,
                    "errors": Errors,
                });
            })
            .catch((error) => {
                Errors.push(error);
                res.status(200).json({
                    "result": Result,
                    "errors": Errors,
                });
            });
    }
    go();
    
};

exports.postCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    const names = req.body.name;
    const major = req.body.isMajor;
    names.forEach((element) => {
        Category.create({
            categoryName: element,
            isMajor: major,
        })
            .then((result) => {
                Result.push(result);
            })
            .catch((error) => {
                console.log(chalk.blue.bold.inverse(error));
                Errors.push(error);
            });
    });
    res.status(200).json({
        result: Result,
        errors: Errors,
    });
};

exports.deleteCategory = (req, res, next) => {
    const Result = [];
    const Errors = [];
    const ID = req.params.id;
    Category.destroy({ where: { id: ID } })
        .then((result) => {
            Result.push(result);
        })
        .catch((error) => {
            console.log(chalk.blue.bold.inverse(error));
            Errors.push(error);
        });
    res.status(200).json({
        result: Result,
        errors: Errors,
    });
};
