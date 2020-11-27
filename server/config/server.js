"use strict"

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const cors = require('cors');
const server = express();

server.use(cors());

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', routes);

const port = 1234;

server.listen(port, () => {});