import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "db_books",
});

connection.connect();

/**
 * Executa uma query sql
 * @param {string} sql instrução sql
 * @param {string | [data, id]} values parametros para instrução como id ou dados do livro
 * @param {string} rejectMessage mensagem de erro
 * @returns objeto da promise
 */
export const consult = (sql, values = "", rejectMessage) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(rejectMessage);

      const data = JSON.parse(JSON.stringify(result));
      return resolve(data);
    });
  });
};

export default connection;
