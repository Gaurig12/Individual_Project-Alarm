const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/readData', async(req,res) => {
    try {
        await controller.readData(req,res);
    } catch (error) {
        console.log(error);
        res.status(500).json({errorrrr: 'Server error'});
    }})

module.exports= router;
