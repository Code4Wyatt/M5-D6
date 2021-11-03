import Product from "./Product.js";
import Review from "./Reviews.js";

Product.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Author, { onDelete: "CASCADE" });

export default { Product, Review };