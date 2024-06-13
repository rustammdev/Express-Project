const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    // JSON qiymat qaytarish
    res.status(200).json({message: "Get all contacts broo ))"})
});

router.route("/").post((req, res) => {
    res.status(200).json({message: "Create contact"})
});

router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get contac for ${req.params.id}`})
});

router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update contac for ${req.params.id}`})
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete contac for ${req.params.id}`})
});

module.exports = router;