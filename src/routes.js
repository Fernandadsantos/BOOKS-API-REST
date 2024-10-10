import { Router } from "express";
import BookControllers from "./app/controllers/BookControllers.js";

const router = Router();

router.post("/livros", BookControllers.store);
router.get("/livros/:id", BookControllers.show);
router.get("/livros", BookControllers.index);
router.put("/livros/:id", BookControllers.update);
router.delete("/livros/:id", BookControllers.delete);

export default router;
