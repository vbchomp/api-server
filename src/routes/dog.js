'use strict'

const express = require('express');

const { Dog } = require('../models/index.js');

const router = express.Router();

// REST route declarations
router.post('/dog', createDog);
router.get('/dog', getTheLitter);
router.get('/dog/:id', getOneDog);
router.put('/dog/:id', updateDog);
router.delete('/dog/:id', deleteDog);

// RESTful Route Handlers
async function createDog (req,res) {
    let obj = req.body;
    let newDog = await Dog.create(obj)
    res.status(200).json(newDog);
}

async function getTheLitter (req,res) {
    let dogs = await dogCollection.read();
    res.status(200).json(dogs);
}

async function getOneDog (req,res) {
    const id = parseInt(req.params.id);
    let goodLuckPickingOne = await Dog.findOne({ where: { id } });
    res.status(200).json(goodLuckPickingOne);
}


async function updateDog (req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let dog = await Dog.findOne({ where: { id } });
    let updatedDog = await dog.update(obj);
    res.status(200).json(updatedDog);
}

async function deleteDog (req,res) {
    const id = parseInt(req.params.id);
    let poorPooper = await Dog.delete({ where: { id } });
    res.status(200).json(poorPooper);
}

module.exports = router;