const chalk = require("chalk");
const express = require("express");

const categoryController = require("../controller/category");

const router = express.Router();

router.get('/', categoryController.getCategory);
router.post("/", categoryController.postCategory);
router.delete("/:id", categoryController.deleteCategory);


module.exports = router;
