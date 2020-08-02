var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var workoutSchema = new Schema({

    day: {type: Date, default: Date.now}, // String is shorthand for {type: String}
    workouts: [
        {
            exerciseType: {
            type: String,
            trim: true
        },
            exerciseName: {
            type:String,
            trim: true
        },
        weight: {
            type: Number
        },

        sets : {
            type: Number
        },

        reps : {
            type: Number
        },

        duration : {
            type: Number
        },

        distance : {
            type: Number
        },

    }] ,


});

var Model = mongoose.model("Workout", fitnessSchema);

module.exports = workoutSchema;