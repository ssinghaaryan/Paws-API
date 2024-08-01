const express = require ('express');
const { getPets, getPetById, getPetByName, getPetByUID, addPet, updatePet, updatePetByName, updatePetByUID, deletePet, deletePetByName, deletePetByUID} = require('../controllers/pet.controller');
const router = express.Router();

router.get('/', getPets);

// router.get('/:id', getPetById);

// router.get('/:name', getPetByName);

router.get('/:uid', getPetByUID);

router.post('/', addPet);

// router.put('/:id', updatePet);

// router.put('/:name', updatePetByName);

router.put('/:uid', updatePetByUID);

// router.delete('/:id', deletePet);

// router.delete('/:name', deletePetByName);

router.delete('/:uid', deletePetByUID);

module.exports = router;