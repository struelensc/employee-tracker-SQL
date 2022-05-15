const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const Company = require("./lib/Company");

// Import SQL connection
const db = require("./config/connection");

// Initial question prompt
const initalMenu = [
  {
    type: "list",
    name: "menuChoice",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "View All Departments",
      "Add Department",
    ],
  },
];

// Question for adding a department
const addDepartment = [
  {
    type: "input",
    name: "departmentName",
    message: "What is the name of the department?",
  },
];

// Questions for adding a role
const addRole = [
  {
    type: "input",
    name: "roleName",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the salary for this role?",
  },
  {
    type: "list",
    name: "roleDepartment",
    message: "Which department does the role belong to?",
    choices: [], //list of departments
  },
];

// Questions for adding an employee
const addEmployee = [
  {
    type: "input",
    name: "employeeFirstName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "employeeLastName",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "employeeRole",
    message: "What is the employee's role?",
    choices: [], //list of rolls
  },
  {
    type: "list",
    name: "employeeManager",
    message: "Who is the employee's manager?",
    choices: [], //list of employees
  },
];

// Questions for updating an employee
const updateEmployee = [
  {
    type: "list",
    name: "employeeName",
    message: "Which employee's role do you want to update?",
    choices: [], //list of employees
  },
  {
    type: "list",
    name: "employeeNewRole",
    message: "Which role do you want to assign the selected employee?",
    choices: [], //list of roles
  },
];

// Query database
db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});
