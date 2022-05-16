const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const Company = require("./lib/Company");

// IMPORT SQL CONNECTION
const db = require("./config/connection");

function init() {
  mainMenu();
}

// SUPPLIES THE MAIN MENU QUESTION
async function mainMenu() {
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
        "Add Role",
        "View All Departments",
        "Add Department",
      ],
    },
  ];

  const answer = await inquirer.prompt(initalMenu);

  redirect(answer);
}

// REDIRECTS USER TO THE NEXT APPLICABLE QUESTION AND/OR ANSWER
async function redirect(data) {
  const view = new Company();

  const redirctOptions = [
    {
      choice: "View All Employees",
      dir: async () => {
        await view.getEmployeeData();
        await mainMenu();
      },
    },
    {
      choice: "View All Roles",
      dir: async () => {
        await view.getRoleData();
        await mainMenu();
      },
    },
    {
      choice: "View All Departments",
      dir: async () => {
        await view.getDepartmentData();
        await mainMenu();
      },
    },
    {
      choice: "Add Employee",
      dir: () => {
        addEmployee();
      },
    },
    {
      choice: "Add Department",
      dir: () => {
        addDepartment();
      },
    },
  ];

  for (let i = 0; i < redirctOptions.length; i++) {
    if (data.menuChoice === redirctOptions[i].choice) {
      redirctOptions[i].dir();
    }
  }
}

// ADDS NEW EMPLOYEE TO DATABASE
async function addEmployee() {
  let view = new Company();
  let roles = await view.listRoles();
  let employees = await view.listEmployees();

  // Questions for adding an employee
  const addEmployeeQuest = [
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
      choices: roles, //list of rolls
    },
    {
      type: "list",
      name: "employeeManager",
      message: "Who is the employee's manager?",
      choices: employees, //list of employees
    },
  ];

  const employeeData = await inquirer.prompt(addEmployeeQuest);

  let fname = employeeData.employeeFirstName;
  let lname = employeeData.employeeLastName;
  let role = employeeData.employeeRole;
  let manager = employeeData.employeeManager;

  const newEmployee = new Employee(fname, lname, role, manager);
  await newEmployee.writeToDatabase();

  mainMenu();
}

// ADDS NEW DEPARTMENT TO DATABASE
async function addDepartment() {
  // Question for adding a department
  const addDepartmentQuest = [
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the department?",
    },
  ];

  const departmentData = await inquirer.prompt(addDepartmentQuest);

  let name = departmentData.departmentName;

  const newDepartment = new Department(name);
  await newDepartment.writeToDatabase();

  mainMenu();
}

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

init();
