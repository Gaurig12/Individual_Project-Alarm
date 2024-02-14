const model = require('../model/model');

const controller = {
   
    createData: async(req,res) => {
        console.log(req);
        try {
            const data = req.body;
            console.log(data)
            const newdata = await model.createData(data);
            res.status(201).json(newdata);
            console.log('New data entered:', newdata);
        } catch (error) {
            console.error('Error creating data:', error);
            res.status(500).json({errorce: 'Server error'});
        }
    },

    readData: async(req,res) => {
        try {
            const dbdata = await model.readData();
            res.json(dbdata);
        } catch (error) {
            res.status(500).json({errorccc: 'Server error'});
        }
    }

}

module.exports = controller;
