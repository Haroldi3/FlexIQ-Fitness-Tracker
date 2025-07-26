const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  rpe: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Workout', WorkoutSchema);
