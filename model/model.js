const pool = require('../config/db.config')

const model = {

    //create entry
   createEntry: async(data) => {
        const {status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus} = data;
        const query = 'INSERT INTO "Alarmdetails" (status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
        const values = [status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    getData: async() => {
        const query = 'SELECT * FROM "Alarmdetails"';
        const result = await pool.query(query);
        return result.rows;
    },

    /*editData: async(id, editDbInfo) => {
        const {operator_low, operator_high} = editDbInfo;
        const query = 'UPDATE "Alarmdetails" SET type = $1, phase = $2 WHERE id = $3 RETURNING *';
        const values=[operator_low, operator_high, sensor_name];
        const result = await pool.query(query, values);
        return result.rows[0];
    }*/
}

module.exports = model