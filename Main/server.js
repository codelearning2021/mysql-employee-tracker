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
    db.query(`SELECT * FROM role;`, (err, res) => {
      if (err) throw err;
      let newRoles = res.map(role => ({ name: role.title, value: role.role_id }));
      db.query(`SELECT * FROM employee;`, (err, res) => {
        if (err) throw err;
        let newEmployees = res.map(employee => ({ name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id }));
        inquirer.prompt([
          {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the new employee?'
          }
            {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the new employee?'
          }
            {
            name: 'title',
            type: 'rawlist',
            message: 'What is the role of the new employee?',
            chocies: newRoles
          }
            {
            name: 'manager',
            type: 'rawlist',
            message: 'Name of their assigned manager?',
            choices: newEmployees
          }
            (err, res) => {
            if(err) throw err;
            console.log(`${response.newRole} successfully added to database!`);
            mainQuestion();
          }])
        })
      })
  };
  

      function addRole() {
          db.query("SELECT * FROM role;", function (err, res) {
            if (err) throw err;
            let deptChoices = res.map(department => ({ name: department.department_name, value: department.department_id }));
            inquirer.prompt([
              {
                name: 'newRole',
                type: 'input',
                message: 'What is the title of the role you want to add?'
              }
      {
                name: 'newSalary',
                type: 'input',
                message: 'What is the salary of the role you want to add?'
              }
      {
                name: 'newDepartment',
                type: 'rawlist',
                message: 'What is the department of the role you want to add?',
                choices: deptChoices
              }
            ]).then((response) => {
              db.query(`INSERT INTO role SET ?`,
                {
                  title: newRole,
                  salary: newSalary,
                  department_id: response.newDepartment,
                },
                (err, res) => {
                  if (err) throw err;
                  console.log(`${response.newRole} successfully added to database!`);
                  mainQuestion();
                })
            })
          })
    };
    

function addDepartment() {
              inquirer.prompt([
                {
                  name: 'newDepartment',
                  type: 'input',
                  message: 'What is the name of the department you want to add?'
                }
              ]).then((response) => {
                db.query(`INSERT INTO department SET ?`,
                  {
                    department_name: response.newDepartment,
                  },
                  (err, res) => {
                    if (err) throw err;
                    console.log(`${response.newDepartment} successfully added to database!`);
                    mainQuestion();
                  })
                })
              }
        };

// Updating an employee's role and manager
function updateRole() {
              db.query(`SELECT * FROM role;`, (err, res) => {
                if (err) throw err;
                let employeeRoleUpdate = res.map(role => ({name: role.title, value: role.role_id }));
                connection.query(`SELECT * FROM employee;`, (err, res) => {
                  if (err) throw err;
                  let employeeNameUpdate = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id }));
                inquirer.prompt([
                  {
                    name: 'employee',
                    type: 'rawlist',
                    message: 'Which employee would you like to update the role for?',
                    choices: employeeNameUpdate
                  },
                  {
                    name: 'updateRole',
                    type: 'rawlist',
                    message: 'What is the new role of the employee?',
                    choices: employeeRoleUpdate
                  },
                ]).then((response) => {
                  db.query(`UPDATE employee SET ? WHERE ?`, 
                  [
                      {
                          role_id: response.updateRole,
                      },
                      {
                          employee_id: response.employee,
                      },
                  ], 
                  (err, res) => {
                    if (err) throw err;
                    console.log(`You have updated employee's role in the database`);
                    mainQuestion();
                )
              }

              )
            }
              )}
            )}

// Default response for any other request (Not Found)
app.use((req, res) => {
              res.status(404).end();
            });

          app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
          });
