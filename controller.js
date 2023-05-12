import { brands, categories, products } from "./constant.js";

import fs from "fs";

export const fetchCategories = (req, res) => {
  return res.json(categories);
};

export const fetchProducts = (req, res) => {
  const { categoryId, keyword } = req.body;
  const currentProducts = products.filter((product) => {
    if (keyword !== undefined && keyword !== null && keyword !== "") {
      return (
        product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 &&
        product.categoryId === parseInt(categoryId)
      );
    }
    return product.categoryId === parseInt(categoryId);
  });

  return res.json(currentProducts);
};

export const getFile = (req, res) => {
  try {
    const { image_path } = req.params;
    const image = fs.readFileSync(`./assets/${image_path}`);
    res.writeHead(200, { "Content-Type": "image/png" });
    return res.end(image); // Send the file data to the browser.
  } catch {
    const image = fs.readFileSync(`./assets/shop.png`);
    res.writeHead(200, { "Content-Type": "image/png" });
    return res.end(image); // Send the file data to the browser.
  }
};
