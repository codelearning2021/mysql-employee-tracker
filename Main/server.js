// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'debug my butt',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(function (err) {
  if (err) throw err
  mainQuestion()
}
)
function mainQuestion() {
  inquirer.prompt(
    [
      {
        type: "list",
        name: "main",
        message: "Choose an option",
        choices: [
          "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "done"
        ]
      }
    ]
  ).then(answer) => {
    if (answer.main === "view all departments") {
      viewAllDepartments()
    } else if (answer.main === "view all roles") {
      viewAllRoles()
    } else if (answer.main === "view all employees") {
      viewAllEmployees()
    } else if (answer.main === "add a department") {
      addDepartment()
    } else if (answer.main === "add a role") {
      addRole()
    } else if (answer.main === "add an employee") {
      addEmployee()
    } else if (answer.main === "update an employee role") {
      updateRole()
    } else if (answer.main === "done") {
      db.end()
    }
  }


  function viewAllDepartments() {
    db.query("SELECT * FROM department;", function (err, res) {
      if (err) throw err
      console.table(res)
      mainQuestion();
    })
  }

  function viewAllRoles() {
    db.query("SELECT * FROM role;", function (err, res) {
      if (err) throw err
      console.table(res)
      mainQuestion();
    })
  }

  function viewAllEmployees() {
    db.query("SELECT * FROM employee;", function (err, res) {
      if (err) throw err
      console.table(res)
      mainQuestion();
    })
  }

  function addEmployee() {
    db.query("INSERT INTO employee (first_name, last_name);", function (err, res) {
      if err throw err
      console.table(res)
      mainQuestion();
    })
  }

  function addRole() {

  }

  function addDepartment() {
    inquirer.prompt([
      {
        name: 'newDepartment',
        type: 'input',
        message: 'What is the name of the department you want to add?'
      }
    ]).then((response) => {
      connection.query(`INSERT INTO department SET ?`,
        {
          department_name: response.newDepartment,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`\n ${response.newDepartment} successfully added to database! \n`);
          mainQuestion();

        })
      })}

function updateRole() {

        }

// Read list of all roles and employees and associated employee name using LEFT JOIN
// app.get('/api/employee-reviews', (req, res) => {
//   const sql = `SELECT name AS employee, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// BONUS: Update review name
// app.put('/api/review/:id', (req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
          res.status(404).end();
        });

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });



WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
      select * from department;

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
select * from role(join on id / department id)

      select * from role where

// CREATE TABLE courses (
//   id INT,
//   course_title VARCHAR(30) NOT NULL,
//   instructor_id INT,
//   order_details TEXT,
//   FOREIGN KEY (instructor_id)
//   REFERENCES instructors(id)
//   ON DELETE SET NULL
// );

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database