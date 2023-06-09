const Database = require("./Database");
const User = require("./Classes/User");
const Author = require("./Classes/Author");

module.exports = class App {
  static #database = new Database();

  createUser(nome, email, password) {
    const user = new User(nome, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  getAuthor() {
    return App.#database.find("authors");
  }
};
