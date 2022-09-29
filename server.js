const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'BeLlA29!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  
  // Create a EE
//   app.post('/', (req, res) =>
//   db.query('S', function (err, results){
//       res.json(results);
//   })
//   );
  
  
  
  app.get('/api/Department', (req, res) =>
  db.query('SELECT * from Department', function (err, results){
      res.json(results);
  })
  );

  
  app.get('/api/roles', (req, res) =>
  db.query('SELECT * from roles', function (err, results){
      res.json(results);
  })
  );

  
  app.get('/api/employees', (req, res) =>
  db.query('SELECT * from employees', function (err, results){
      res.json(results);
  })
  );