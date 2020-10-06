const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: new Date()
    },

    excercises: [
        {
            type: {
                type: String,
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            duration: {
                type: Number
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ],

    duration: {
        type: Number,
        default: 0
    }

    
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};