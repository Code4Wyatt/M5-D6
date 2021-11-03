import express from "express";
import cors from "cors";
import { testConnection, connectDB } from "../src/db/index.js";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";


const server = express();

const port = process.env;

server.use(cors());

server.use(express.json());

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);


server.listen(port, () => {
  console.log("server on port:", port);
  await testConnection(); // confirms connection is possible
  await connectDB(); // connects
  });