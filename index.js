const express = require('express');
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const PORT = process.env.PORT || 3000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "important_midtest_db",
});

// Read list all coffee
app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * from coffee", (err, rows) => {
      connection.release(); // return the connection to pool
      if (!err) {
        res.status(200).json({ data: rows });
      } else {
        res.status(500).json({ error: err });
      }
    });
  });
});

// Read detail coffee by ID
app.get("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "SELECT * FROM coffee WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ error: err });
        }
      }
    );
  });
});

// Delete coffee by ID
app.delete("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "DELETE FROM coffee WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        connection.release(); // return the connection to pool
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ error: err });
        }
      }
    );
  });
});

// Create coffee
app.post("/", jsonParser, (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const params = req.body;
    connection.query("INSERT INTO coffee SET ?", params, (err, rows) => {
      connection.release(); // return the connection to pool
      if (!err) {
        res.status(200).json({ data: rows });
      } else {
        res.status(500).json({ error: err });
      }
    });
  });
});

// Update coffee by ID
app.put("/:id", jsonParser, (req, res) => {
  const { id } = req.params;
  const params = req.body;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    const fields = [];
    const values = [];
    for (const key in params) {
      fields.push(`${key} = ?`);
      values.push(params[key]);
    }
    const query = `UPDATE coffee SET ${fields.join(", ")} WHERE id = ?`;
    values.push(Number(id));
    connection.query(query, values, (err, rows) => {
      connection.release(); // return the connection to pool
      if (!err) {
        res.status(200).json({ data: rows });
      } else {
        res.status(500).json({ error: err });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
