import express from "express";
import models from "../../db/models/index.js";

const { Product, Review } = models;

const router = express.Router();

router.route("/").get(async (req, res, next) => {
    try {
      const Product = await Product.findAll({ include: Review });
      res.send(Product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);  // .create creates a new entry passing in the request body 
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router.route("/:id").get(async (req, res, next) => {
    try {
      const Product = await Product.findByPk(req.params.id);
      res.send(Product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      delete req.body.email;
      delete req.body.id;
      const newProduct = await Product.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.send(newProduct[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const productRows = await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ productRows });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;