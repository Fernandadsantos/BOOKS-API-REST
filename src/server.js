import app from "./app.js";

const PORT = process.env.PORT || 3000;

//listener da porta
app.listen(PORT, () => {
  console.log(`Servirdor rodando no endereço http://localhost:${PORT}`);
});
