const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');



router.get('/getData', async(req,res) => {
    try {
        await controller.getData(req,res);
    } catch (error) {
        console.log(error);
        res.status(500).json({errorrrr: 'Server error'});
    }
})
/*
router.put('/editData/:id', async(req,res) => {
    try {
        await controller.editData(req,res);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Server error'});
    }
})*/

module.exports= router;