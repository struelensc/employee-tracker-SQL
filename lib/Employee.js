const db = require("../config/connection");

class Employee {
  constructor(firstName, lastName, role, manager) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.manager = manager;
  }

  async writeToDatabase() {
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

  updateDatabase() {
    // query to update an employee
  }
}

module.exports = Employee;
