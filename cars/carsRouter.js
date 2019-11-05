const express = require("express");

const knex = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  // list of posts
  // SELECT * from Posts
  // returns a promise
  knex
    .select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to get accounts from database" });
    });
});

router.get("/:id", (req, res) => {
  knex
    .select("*")
    .from("cars")
    .where("id", "=", req.params.id)
    .first()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to get post from database" });
    });
});

router.post("/", (req, res) => {
  knex
    .insert(req.body, "id")
    .into("cars")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to insert post" });
    });
});

module.exports = router;
