'use strict'

const express = require('express');

const { Cat } = require('../models/index.js');

const router = express.Router();

// REST route declarations
router.post('/cat', createACat);
router.get('/cat', getTheClowder);
router.get('/cat/:id', getOneCat);
router.put('/cat/:id', updateCat);
router.delete('/cat/:id', deleteCat);

// RESTful Route Handlers
async function createACat (req,res) {
    let obj = req.body;
    let newCat = await Cat.create(obj)
    res.status(200).json(newCat);
}

async function getTheClowder (req,res) {
    let cats = await catCollection.read();
    res.status(200).json(cats);
}

async function getOneCat (req,res) {
    const id = parseInt(req.params.id);
    let theLoneCat = await Cat.findOne({ where: { id } });
    res.status(200).json(theLoneCat);
}

async function updateCat (req,res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let cat = await Cat.findOne({ where: { id } });
    let updatedCat = await cat.update(obj);
    res.status(200).json(updatedCat);
}

async function deleteCat (req,res) {
    const id = parseInt(req.params.id);
    let poorCat = await Cat.delete({ where: { id } });
    res.status(200).json(poorCat);
}

module.exports = router;