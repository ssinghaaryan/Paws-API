const petModel = require('../models/pet.model');

// The apiName tag is used as reference for the order (in package.json)
/**
 * @api {get} api/pets Get all Pets
 * @apiName GetPets
 * @apiGroup Pets
 * 
 * @apiExample {curl} JSON Request:
 * curl https://paws-api-app.vercel.app/api/pets \
 *  -H 'Accept: application/json'
 * 
 * @apiHeader {String} Accept =application/json Sets what format the response body is returned in.
 *   
 * @apiSuccess (Success: 200 OK) {Number} _id Pet ID
 * @apiSuccess (Success: 200 OK) {String} petName Pet Name
 * @apiSuccess (Success: 200 OK) {String} petType Pet Type [Dog/Cat]
 * @apiSuccess (Success: 200 OK) {Number} age Pet Age
 * @apiSuccess (Success: 200 OK) {Boolean} vacinationStatus Pet's Vacination Status
 * @apiSuccess (Success: 200 OK) {Boolean} availabilityStatus Pet's Availability Status
 * 
 * @apiSuccessExample {json} Response:
 * {
 *  "_id": "667954dfd198571b7e23b859",
 *  "petName": "Bruno",
 *  "petType": "Dog",
 *  "age": 2,
 *  "vacinationStatus": true,
 *  "availabilityStatus": true,
 *  "__v": 0
 * },
 * {
 *  "_id": "66797cd2369afecea1bb1c62",
 *  "petName": "Beetle",
 *  "petType": "Dog",
 *  "age": 3,
 *  "vacinationStatus": true,
 *  "availabilityStatus": false,
 *  "__v": 0
 * },
 * {...}
*/

// Getting all Products from DB.
const getPets = async (req, res) => {
    try {
       const pets =  await petModel.find({});
       res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//--------

/**
 * @api {get} api/pets/:id Get Pet by ID
 * @apiName GetPet
 * @apiGroup Pets
 * 
 * @apiExample {curl} JSON Request:
 * curl https://paws-api-app.vercel.app/api/pets/{id} \
 *  -H 'Accept: application/json'
 * 
 * @apiParam (URL Parameter){Number} id Pet ID
 * 
 * @apiHeader {String} Accept =application/json Sets what format the response body is returned in.   
 * 
 * @apiSuccess (Success: 200 OK) {Number} _id Pet ID
 * @apiSuccess (Success: 200 OK) {String} petName Pet Name
 * @apiSuccess (Success: 200 OK) {String} petType Pet Type [Dog/Cat]
 * @apiSuccess (Success: 200 OK) {Number} age Pet Age
 * @apiSuccess (Success: 200 OK) {Boolean} vacinationStatus Pet's Vacination Status
 * @apiSuccess (Success: 200 OK) {Boolean} availabilityStatus Pet's Availability Status
 * 
 * @apiSuccessExample {json} Response:
 * {
 *  "_id": "667954dfd198571b7e23b859",
 *  "petName": "Bruno",
 *  "petType": "Dog",
 *  "age": 2,
 *  "vacinationStatus": true,
 *  "availabilityStatus": true,
 *  "__v": 0
 * }
 * 
 * @apiError (Error: 404 Not Found) PetNotFound Pet with the provided ID not found
 * 
 * @apiErrorExample Response:
 * {
 *  "message": "No Pet found with the specified ID"
 * }
*/

// Getting individual Product by ID
// const getPetById = async (req, res) => {
//     try {
//         const { id } = req.params; // id variable needs to be same as the id parameter.
//         const pet = await petModel.findById(id);
//         // res.message("")
//         res.status(200).json(pet);
//     } catch (error) {
//         res.status(404).json({message: "No Pet found with the specified ID."});
//     }
// };

const getPetByName = async (req, res) => {
    try {
        // const { name } = req.params; // id variable needs to be same as the id parameter.
        const { name } = req.params['petName'];
        const pet = await petModel.find(name);
        // res.message("")
        res.status(200).json(pet);
    } catch (error) {
        res.status(404).json({message: "No Pet found with the specified ID."});
    }
};

//--------

/**
 * @api {post} api/pets Add Pet
 * @apiName AddPet
 * @apiGroup Pets
 * 
 * @apiExample {curl} JSON Request:
 * curl -X POST \
 *  https://paws-api-app.vercel.app/api/pets \
 *  -H 'Content-Type: application/json' \
 *  -H 'Accept: application/json' \
 *  -d '{
 *    "petName": "Jimmy",
 *    "petType": "Cat",
 *    "age": 2,
 *    "vacinationStatus": false,
 *    "availabilityStatus": true
 * }'
 * 
 * @apiHeader {String} Content-Type =application/json Sets the format of payload you are sending.
 * @apiHeader {String} Accept =application/json Sets what format the response body is returned in.
 *   
 * @apiBody {String} petName Pet Name
 * @apiBody {String} petType Pet Type [Dog/Cat]
 * @apiBody {Number} age Pet Age
 * @apiBody {Boolean} vacinationStatus Pet's Vacination Status
 * @apiBody {Boolean} availabilityStatus Pet's Availability Status
 * 
 * @apiSuccess (Success: 201 Created) {String} petName Pet Name
 * @apiSuccess (Success: 201 Created) {String} petType Pet Type [Dog/Cat]
 * @apiSuccess (Success: 201 Created) {Number} age Pet Age
 * @apiSuccess (Success: 201 Created) {Boolean} vacinationStatus Pet's Vacination Status
 * @apiSuccess (Success: 201 Created) {Boolean} availabilityStatus Pet's Availability Status
 * @apiSuccess (Success: 201 Created) {Number} _id Pet ID
 * 
 * @apiSuccessExample {json} Response:
 * {
 *  "petName": "Zeus",
 *  "petType": "Cat",
 *  "age": 5,
 *  "vacinationStatus": true,
 *  "availabilityStatus": true,
 *  "_id": "667abd8a03385491af4cde05",
 *  "__v": 0
 * }
*/

// Adding Pet
const addPet = async (req, res) => {
    try {
        const pet = await petModel.create(req.body);
        res.status(201).json(pet)
        // res.status(201).json({ status: "Pet Added" ,pet});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//----------

/**
 * @api {put} api/pets/:id Update Pet
 * @apiName UpdatePet
 * @apiGroup Pets
 * 
 * @apiExample {curl} JSON Request:
 * curl -X PUT \
 *  https://paws-api-app.vercel.app/api/pets/{id} \
 *  -H 'Content-Type: application/json' \
 *  -H 'Accept: application/json' \
 *  -d '{
 *    "petName": "Bruno",
 *    "petType": "Dog",
 *    "age": 3,
 *    "vacinationStatus": true,
 *    "availabilityStatus": false
 * }'
 *
 * @apiHeader {String} Content-Type =application/json Sets the format of payload you are sending.
 * @apiHeader {String} Accept =application/json Sets what format the response body is returned in.
 *  
 * @apiParam (URL Parameter){Number} id Pet ID
 * 
 * @apiSuccess (Success: 200 OK) {Number} _id Pet ID
 * @apiSuccess (Success: 200 OK) {String} petName Pet Name
 * @apiSuccess (Success: 200 OK) {String} petType Pet Type [Dog/Cat]
 * @apiSuccess (Success: 200 OK) {Number} age Pet Age
 * @apiSuccess (Success: 200 OK) {Boolean} vacinationStatus Pet's Vacination Status
 * @apiSuccess (Success: 200 OK) {Boolean} availabilityStatus Pet's Availability Status
 * 
 * @apiSuccessExample {json} Response:
 * {
 *  "_id": "667abd8a03385491af4cde05", 
 *  "petName": "Zeus",
 *  "petType": "Cat",
 *  "age": 6,
 *  "vacinationStatus": true,
 *  "availabilityStatus": false,
 *  "__v": 0
 * } 
 * 
 * @apiError (Error: 404 Not Found) PetNotFound Pet with the provided ID not found
 * 
 * @apiErrorExample {json} Response:
 * {
 *  "message": "Pet not found"
 * }
*/

// Update Pet by ID
const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        
        const pet = await petModel.findByIdAndUpdate(id, req.body);

        if(!pet) {
            return res.status(404).json({message: "Pet not found"});
        }

        const updatedPet = await petModel.findById(id);
        res.status(200).json({updatedPet});
        // res.status(200).json({status: "Pet details Updated", updatedPet});

    } catch (error) {
        res.status(404).json({message: "Pet not found"});
    }
};

//-----------

/**
 * @api {delete} api/pets/:id Delete Pet
 * @apiName DeletePet
 * @apiGroup Pets
 * 
 * @apiExample {curl} JSON Request:
 * curl -X DELETE \
 *  https://paws-api-app.vercel.app/api/pets/{id} \
 *  -H 'Accept: application/json' 
 * 
 * @apiParam (URL Parameter) {Number} id Pet ID
 * 
 * @apiHeader {String} Accept =application/json Sets what format the response body is returned in.
 * 
 * @apiSuccess (Success: 200 OK) {String} message Pet Deleted Successfully
 * 
 * @apiSuccessExample {json} Response:
 * {
 *  "message": "Pet Deleted Successfully"
 * }
*/

// Delete Pet by ID
const deletePet = async (req, res) => {
    try {
        const { id } = req.params;

        const pet = await petModel.findByIdAndDelete(id);

        if(!pet) {
            return res.status(404).json({message: "Pet not found"});
        }

        res.status(200).json({message: "Pet Deleted Successfully"});

    } catch (error) {
        res.status(404).json({message: "error.message"});
    }
};

module.exports = {
    getPets,
    // getPetById,
    getPetByName,
    addPet,
    updatePet,
    deletePet,
}