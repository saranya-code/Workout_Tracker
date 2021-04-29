const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Workout= new Schema ({
erercise: [{
type: {
    type: string,
    trim: true,
    required: true
  },
name: {
    type: string,
    trim: true,
    required: true
  },
distance: {
    type: Number,
    unique: true,
    required: true
  },
duration: {
    type: Number,
    unique: true,
    required: true
  },
weight: {
    type: Number,
    unique: true,
    required: true
  },
Sets: {
    type: Number,
    unique: true,
      required: true
  },
reps: {
    type: Number,
    unique: true,
    required: true
  },

}]

})

const User = mongoose.model("User", Workout);

module.exports = Example;