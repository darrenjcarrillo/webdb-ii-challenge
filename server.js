const express = require("express");
const helmet = require("helmet");

const carsRouter = require("./cars/carsRouter");
// const postRouter = require("./posts/postRouter");

const server = express();

server.use(helmet());
server.use(express.json());
// server.use(logger);

server.get("/", (req, res) => {
  res.send("<h3>DB Helpers with knex</h3>");
});

server.use("/api/cars", carsRouter);
module.exports = server;
