import express from "express";
import models from "../../db/models";
const { Product, Review } = models; // deconstructing product and review models from the models db file

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const reviews = await Review.findAll({ include: Product });
    res.send(reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
}).post(async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.send(newReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
