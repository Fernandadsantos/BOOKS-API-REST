import BookRepository from "../repositories/BookRepository.js";

class BookController {
  async index(req, res) {
    const result = await BookRepository.findAll();
    res.json(result);
  }

  async show(req, res) {
    const result = await BookRepository.finfById(req.params.id);
    res.json(result);
  }

  async store(req, res) {
    const result = await BookRepository.create(req.body);
    res.json(result);
  }

  async update(req, res) {
    const result = await BookRepository.update(req.body, req.params.id);
    res.json(result);
  }

  async delete(req, res) {
    const result = await BookRepository.delete(req.params.id);
    res.json(result);
  }
}

export default new BookController();
