const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer')
// const { response } = require('express');

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


inquirer.prompt([

  {
    type: 'list',
    message: 'What would you like to do ',
    name: 'choices',
    choices: ['Departments', 'roles', 'employees', 'add Departments', 'add roles', ' add employees', 'update employee role']
  },

])
  .then((response => {
    if (response.choices === 'Departments') {
      Departments()
    } else if (response.choices === 'roles') {
      roles()
    } else if (response.choices === 'employees') {
      employees()
    } else if (response.choices === 'add Departments') {
      addDepartments()
    } else if (response.choices === 'add roles') {
      addRoles()
    } else if (response.choices === 'add employees') {
      addEmployees()
    } else if (response.choices === 'update employee role') {
      updateEmployeeRole()
    }
  })
  )










function Departments() {
  app.get('/api/Department', (req, res) =>
    db.query('SELECT * from Department', function (err, response) {
      res.json(response);
    })
  );
  
}
function addDepartments() {
  app.post('/api/Department', ({ body }, res) => {
    const sql = ` INSERT INTO Department  (id, department_name)
      VALUES (1, 'produce'),
      (2, 'bakery')`;
    const params = [body.department_id];

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
};


function roles() {
  app.get('/api/roles', (req, res) =>
    db.query('SELECT * from roles', function (err, response) {
      res.json(response);
    })
  );
};

function updateEmployeeRole() {
  app.post('/api/roles', ({ body }, res) => {
    const sql = `INSERT INTO roles (id, title, salary, department_id)
      VALUES (1, 'manager', 30.5, 2),
      (2, 'intern', 9.5, 1) 
      (3, 'employee' 15.0, 1),`;
    const params = [body.department_id];

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
}
function employees() {

  app.get('/api/employees', (req, res) =>
    db.query('SELECT * from employees', function (err, response) {
      res.json(response);
    })
  );
}


function addEmployees() {
  app.post('/api/employees', ({ body }, res) => {
    const sql = `INSERT INTO employees (id, first_name, last_name,role_id,department_id)
      VALUES (1,"Sam", "Smith" , 1, 2 ),
      (2,"Bruce", "Kent" , 2, 2),
      (3,"Clark", "Wayne" , 1, 1),
      (4,"Wally", "Jones" , 3, 1),
      (5,"John", "West" , 3, 1);`;
    const params = [body.department_id];

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
}


app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


