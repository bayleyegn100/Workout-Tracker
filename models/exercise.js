const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExcerciesSchema = new Shema({
    excercises: [{
        name: {
            type: string,
            trim: true,
        },
        type: {
            type: string,
            trim: true,
        },
        weight: {
            type: number,
        },
        sets: {
            type: number,
        },
        reps: {
            type: number,
        },
        duration: {
            type: number,
        },
        distanceTraveled: {
            type: number,
        },
    }],
day: {
    type: Date,
    default: Date.now
}
});
const Excercies = mongoose.model("Exercise", ExcerciseSchema);
module.exports = Excercies;


