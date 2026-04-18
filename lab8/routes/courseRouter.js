const express = require('express');
const router = express.Router();
const Course = require('../db/Course');

router.post('/', async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

router.put('/:id', async (req, res) => {
    const updated = await Course.updateOne({ _id: req.params.id }, req.body);
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    const deleted = await Course.deleteOne({ _id: req.params.id });
    res.json(deleted);
});

module.exports = router;