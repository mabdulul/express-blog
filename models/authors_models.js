const db = require("./conn");

class Authors {
  constructor(id, title, name, email, author_id) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static async getAuthors() {
    try {
      const response = await db.any(`select * from authors`);
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  }
  static async getPost(author_id) {
    try {
      const response = await db.one(
        `select * from posts where author_id = '${author_id}';`
      );
      console.log(response);
      return response;
    } catch (e) {
      return e.message;
    }
  }
  static async addEntry(id, name, email) {
    const query = `INSERT INTO authors (id, name, email) VALUES ('${id}', '${name}', '${email}')`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Authors;
