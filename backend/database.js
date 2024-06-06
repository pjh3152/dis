require('dotenv').config();
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

const execute = (query, params) => {
  return new Promise( async (resolve, reject) => {
    const conn = await pool.getConnection().catch(err => console.log(err));
    const rows = await conn.query(query, params).catch(err => {
      reject(err);
      conn.end();
    });

    resolve(rows);
    conn.end();
  });
};

module.exports = { execute };