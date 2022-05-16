const db = require("../config/connection");
const cTable = require("console.table");

class Company {
  static async getEmployeeData() {
    // query to get all employees
    const employeeData = await db.promise().query(
      `SELECT employees.id AS id,
      employees.first_name AS first_name,
      employees.last_name AS last_name,
      roles.title as title,
      departments.department_name as department,
      roles.salary as salary,
      CONCAT(manager.first_name, " ", manager.last_name) as manager
      FROM employees
      INNER JOIN roles ON employees.role_id = roles.id
      INNER JOIN departments ON roles.department_id = departments.id 
      LEFT JOIN employees manager ON manager.id = employees.manager_id`
    );

    console.table(employeeData[0]);
  }

  static async getDepartmentData() {
    // query to get get all departments
    const departmentData = await db
      .promise()
      .query("SELECT * FROM departments");

    console.table(departmentData[0]);
  }

  static async getRoleData() {
    // query to get get all roles
    const roleData = await db.promise().query(
      `SELECT roles.id AS id,
      roles.title AS title, 
      departments.department_name AS department,
      roles.salary AS salary
      FROM roles LEFT JOIN departments ON roles.department_id = departments.id`
    );

    console.table(roleData[0]);
  }

  static async listRoles() {
    // query to list all roles
    const [roles] = await db
      .promise()
      .query(`SELECT id AS value, title AS name FROM roles`);

    return roles;
  }

  static async listEmployees() {
    // query to list all employees
    const [employees] = await db
      .promise()
      .query(
        'SELECT CONCAT(first_name, " ", last_name) as name, id as value FROM employees'
      );

    employees.unshift({ name: "None", value: 0 });

    return employees;
  }

  static async listDepartments() {
    // query to list all departments
    const [departments] = await db
      .promise()
      .query("SELECT department_name as name, id as value FROM departments");

    return departments;
  }
}

module.exports = Company;
