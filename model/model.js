const pool = require('../config/db.config')

const model = {
   createData: async(data) => {
        const {status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus} = data;
        const query = 'INSERT INTO "Alarmdetails" (status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
        const values = [status, id, type , phase , level , project , well , sprovider , depth , indepth , systatus];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    readData: async() => {
        const query = 'SELECT * FROM "Alarmdetails"';
        const result = await pool.query(query);
        return result.rows;
    },
}

module.exports = model
