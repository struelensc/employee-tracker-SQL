const db = require("../config/connection");
const cTable = require("console.table");

class Company {
  getEmployees() {
    // query to get all employees
    db.query("SELECT * FROM employees", function (err, results) {
      err ? console.log(err) : console.table(results);
    });
  }

  getDepartments() {
    // query to get get all departments
  }

  getRoles() {
    // query to get get all roles
  }
}

module.exports = Company;
