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
});

router.route("/:id").get(async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id); // find By Priority Key, passing in the priority key via the req params
    res.send(review);
  } catch (error) {
    console.log(error);
    next(error);
  }
}).put(async (req, res, next) => {
  try {
    const updated = await Product.update(req.body, {  // update the request body
      where: {                  // at the location
        id: req.params.id,      // where the id matches that of the id in the req.params
      },
      returning: true,     // what does this do?
    });
    res.send(updated);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
).delete(async (req, res, next) => {
  try {
    const productRow = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(productRow);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
