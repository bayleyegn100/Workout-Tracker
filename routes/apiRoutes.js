// imported
const db = require("../models");
const router = require("express").Router();
// Add new exercises to a new workout plan.
router.put("/workouts/:id", async (req, res) => {
    try {
        const updatedWorkout = await db.Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }
        }, {
            new: true
        });
        res.json(updatedWorkout);
    } catch (err) {
        res.status(500).json(err);
    }

})
// Adding new workout
router.post("/workouts", async (req, res) => {
    try {
        const newWorkout = await db.Workout.create(req.body);
        res.json(newWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
})

// getWorkoutsInRange
router.get("/workouts/range", async (req, res) => {
    try {
        const workouts = await db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]).limit(7);
        res.json(workouts);

    } catch (err) {
        res.status(500).json(err);
    }
})

// Gettin all workout EX.
router.get("/workouts", async (req, res) => {
    try {
        const workouts = await db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: "$exercises.duration"
                    }
                }
            }
        ]);
        res.json(workouts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;