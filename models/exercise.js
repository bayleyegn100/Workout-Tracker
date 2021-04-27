const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// attributes with their respective properties
const WorkoutSchema = new Schema({
    exercises: [{
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }],
    day: {
        type: Date,
        default: Date.now
    }
});
// exporting 
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;


