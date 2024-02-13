const model = require('../model/model');

const controller = {
   
    createEntry: async(req,res) => {
        console.log(req);
        try {
            const data = req.body;
            console.log("info is"+""+data)
            const newEntry = await model.createEntry(data);
            res.status(201).json(newEntry);
            console.log('work');
            console.log('New entry created:', newEntry);
        } catch (error) {
            console.error('Error creating entry:',error);
            res.status(500).json({errorce: 'Server error'});
        }
    },

    getData: async(req,res) => {
        try {
            const db_data = await model.getData();
            res.json(db_data);
        } catch (error) {
            res.status(500).json({errorccc: 'Server error'});
        }
    },
    editData: async(req,res) => {
        const id = req.params.sensor_name;
        const editDbInfo = req.body;
        try {
           const editedData = await model.editData(id, editDbInfo);
           if(editedData){
            res.json(editedData);
            console.log('Data Updated successfully!')
           } 
           else {
            res.status(404).json({error: ' data not found'});
           }
        } catch (error) {
            res.status(500).json({error: 'Server error'});
        }
    }

}

module.exports = controller;