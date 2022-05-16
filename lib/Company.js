const db = require("../config/connection");
const cTable = require("console.table");

class Company {
  async getEmployeeData() {
    // query to get all employees
    const employeeData = await db.promise().query("SELECT * FROM employees");

    console.table(employeeData[0]);
  }

  async getDepartmentData() {
    // query to get get all departments
    const departmentData = await db
      .promise()
      .query("SELECT * FROM departments");

    console.table(departmentData[0]);
  }

  async getRoleData() {
    // query to get get all roles
    const roleData = await db.promise().query("SELECT * FROM roles");

    console.table(roleData[0]);
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

    employees.unshift({ name: "None", value: 0 });

    return employees;
  }

  async listDepartments() {
    // query to list all departments
    const [departments] = await db
      .promise()
      .query("SELECT department_name as name, id as value FROM departments");

    return departments;
  }
}

module.exports = Company;
