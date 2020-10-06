const express = require("express");
const db = require("../data/dbConfig.js");
const dbFunctions = require("../data/dbHelpers.js");

const server = express();

server.use(express.json());

//api endpoints for accounts db table
//CRUD

//Create
server.post("/accounts", (req, res) => {
    dbFunctions.insert(req.body)
    .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch((dbErr) => {
        res
          .status(500)
          .json(dbErr);
      });
})

//Read
server.get("/accounts", (req, res) => {
  dbFunctions
    .get()
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((dbErr) => {
      res
        .status(500)
        .json(dbErr);
    });
});

server.get("/accounts/:id", (req, res) => {
    dbFunctions.getById(req.params.id)
    .then((dbRes) => {
        res.status(200).json(dbRes);
      })
      .catch((dbErr) => {
        res
          .status(500)
          .json(dbErr);
      });
})

//Update

//Delete

module.exports = server;
