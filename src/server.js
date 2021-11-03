import express from "express";
import cors from "cors";
import { testConnection, connectDB } from "./db/index.js"; 
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";

const server = express();

const port = process.env.PORT;

server.use(cors());
server.use(express.json());

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);

server.listen(port, async () => {
  console.log(`Server running on ${port}`);
  await testConnection();
  await connectDB();
});
  
server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});