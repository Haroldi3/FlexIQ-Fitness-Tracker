const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

//Log a new workout
router.post('/', async (req, res) => {
  console.log('POST DATA:', req.body);
  try {
    const newWorkout = new Workout(req.body);
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Retrieve all logged workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
