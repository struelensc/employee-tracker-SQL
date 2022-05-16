const db = require("../config/connection");

class Role {
  constructor(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  async writeToDatabase() {
    const params = [this.name, this.salary, this.department];

    // query to insert new role
    try {
      await db
        .promise()
        .query(
          `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
          params
        );
      console.log(`Added ${this.name} to the database`);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Role;
