import { fetchCategories, fetchProducts, getFile } from "./controller.js";

import cors from "cors";
import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/categories", fetchCategories);
app.post("/products", fetchProducts);
app.get("/file/:image_path", getFile);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
