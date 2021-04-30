const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Workout= new Schema ({
  day: { 
      type: Date, 
      required: true, 
      default: Date.now 
  },
  exercises: [{
  type: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  distance: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },

}]

})

const User = mongoose.model("User", Workout);

module.exports = User;