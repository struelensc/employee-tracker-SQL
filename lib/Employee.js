const db = require("../config/connection");

class Employee {
  constructor(firstName, lastName, role, manager) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.manager = manager;
  }

  async writeToDatabase() {
    // query to insert new employee
    const params = [this.firstName, this.lastName, this.role, this.manager];

    try {
      await db
        .promise()
        .query(
          `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
          params
        );
      console.log(`Added ${this.firstName} ${this.lastName} to the database`);
    } catch (err) {
      console.log(err);
    }
  }

  static async updateDatabase(role, employeeName) {
    // query to update an employee
    const params = [role, employeeName];

    try {
      await db
        .promise()
        .query(`UPDATE employees SET role_id = (?) WHERE id = (?)`, params);
      console.log(`Updated employee's role`);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Employee;
