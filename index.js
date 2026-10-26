const express = require('express');
const app = express();
const mysql = require("mysql2");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "IMPORTANT_MIDTEST_DB",
});
