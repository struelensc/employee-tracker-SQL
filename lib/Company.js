const db = require("../config/connection");
const cTable = require("console.table");

class Company {
  getEmployeeData() {
    // query to get all employees
    db.query("SELECT * FROM employees", function (err, results) {
      err ? console.log(err) : console.table(results);
    });
  }

  getDepartmentData() {
    // query to get get all departments
    db.query("SELECT * FROM departments", function (err, results) {
      err ? console.log(err) : console.table(results);
    });
  }

  getRoleData() {
    // query to get get all roles
    db.query("SELECT * FROM roles", function (err, results) {
      err ? console.log(err) : console.table(results);
    });
  }

  async listRoles() {
    // query to list all roles
    const [roles] = await db
      .promise()
      .query(`SELECT id AS value, title AS name FROM roles`);
    return roles;
  }

  async listEmployees() {
    // query to list all employees
    const [employees] = await db
      .promise()
      .query(
        'SELECT CONCAT(first_name, " ", last_name) as name, id as value FROM employees'
      );
    return employees;
  }
}

module.exports = Company;
