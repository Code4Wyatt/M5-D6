import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";


const server = express();

server.use(cors());
server.use(express.json());
server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)

const port = 3001;

server.listen(port, () => {
    console.log("server on port:", port);
  });