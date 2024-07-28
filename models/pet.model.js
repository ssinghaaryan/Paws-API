const mongoose = require('mongoose');

const PetSchema = mongoose.Schema(

    // Pet Adoption Schema
    {
        petName: {
            type: String,
            required: [true, "Pet name required!"],
        },

        petType: {
            type: String,
            required: [true, "Pet Type required!"],
        },

        // username: {
        //     type: String,
        //     required: [true, "Pet username required!"]
        // },

        age: {
            type: Number,
            required: [true, "Pet Age required!"],
        },

        vacinationStatus: {
            type: Boolean,
            default: false,
        },

        availabilityStatus: {
            type: Boolean,
            default: true,
        }

    }
    
)

// The Product model that would be added to the DB and would be automatically updated to "Pets".
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;