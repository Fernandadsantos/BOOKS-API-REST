import { consult } from "../database/connection.js";

class BookRepository {
  //CRUD
  create(book) {
    const sql = "INSERT INTO books SET ?;";
    return consult(sql, book, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM books;";
    return consult(sql, "Não foi possivel localizar");
  }

  finfById(id) {
    const sql = "SELECT * FROM books WHERE id=?;";
    return consult(sql, id, "Não foi possivel localizar");
  }

  update(data, id) {
    const sql = "UPDATE books SET ? WHERE id=?;";
    return consult(sql, [data, id], "Não foi possivel atualizar");
  }

  delete(id) {
    const sql = "DELETE FROM books WHERE id=?;";
    return consult(sql, id, "Não foi possivel deletar");
  }
}

export default new BookRepository();
