const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const placeRouter = require('../routes/Place-routes');
require('dotenv').config();

// Server
const server = express();

server.use(express.json());
server.use(morgan("default"));

// DON'T TOUUCH THIS (I WILL SKIN YOU ALIVE🙂)
async function mongooseConnect() {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to Database");
}

mongooseConnect().catch((error) => console.log(error));

// API routing:
server.use("/api/v1", placeRouter.placeRouter);

server.listen(process.env.PORT);