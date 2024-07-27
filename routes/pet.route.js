const express = require ('express');
const { getPets, getPetById, getPetByName, addPet, updatePet, deletePet } = require('../controllers/pet.controller');
const router = express.Router();

router.get('/', getPets);

// router.get('/:id', getPetById);

router.get('/:petName', getPetByName);

router.post('/', addPet);

router.put('/:id', updatePet);

router.delete('/:id', deletePet);

module.exports = router;