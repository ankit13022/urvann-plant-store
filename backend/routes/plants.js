const express = require("express");
const Plant = require("../models/Plant");

const router = express.Router();

function validatePlant(data) {
    const errors = [];

    if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
        errors.push("Name is required and must be a string.");
    }

    if (data.price == null || isNaN(data.price) || Number(data.price) < 0) {
        errors.push("Price must be a valid non-negative number.");
    }

    if (
        !data.categories ||
        !Array.isArray(data.categories) ||
        data.categories.length === 0
    ) {
        errors.push("Categories must be a non-empty array of strings.");
    }

    if (
        data.categories &&
        !data.categories.every((c) => typeof c === "string" && c.trim())
    ) {
        errors.push("Each category must be a valid string.");
    }

    if (data.available != null && typeof data.available !== "boolean") {
        errors.push("Available must be true or false.");
    }

    return errors;
}

// GET /plants?name=&category=
router.get('/', async (req, res) => {
    try {
        const { name, category } = req.query;
        const query = {};

        if (name) {
            query.$or = [
                { name: { $regex: name, $options: "i" } },
                { categories: { $in: [new RegExp(name, "i")] } }
            ];
        }

        if (category) {
            query.categories = { $in: [new RegExp(category, "i")] };
        }

        const plants = await Plant.find(query).lean();
        res.json(plants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// POST /plants
router.post("/", async (req, res) => {
    const errors = validatePlant(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ error: errors[0] });
    }

    try {
        const plant = new Plant(req.body);
        await plant.save();
        res.status(201).json(plant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
