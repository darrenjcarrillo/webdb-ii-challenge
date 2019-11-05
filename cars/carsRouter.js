const express = require("express");

// const knex = require("../data/dbConfig.js");
const carsDB = require("./carsDb.js");

const router = express.Router();

// router.get("/", (req, res) => {
//   // list of posts
//   // SELECT * from Posts
//   // returns a promise
//   knex
//     .select("*")
//     .from("cars")
//     .then(cars => {
//       res.status(200).json(cars);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to get accounts from database" });
//     });
// });

// USING HELPERS
router.get("/", (req, res) => {
  carsDB
    .find(req.query)
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

// router.get("/:id", (req, res) => {
//   knex
//     .select("*")
//     .from("cars")
//     .where("id", "=", req.params.id)
//     .first()
//     .then(cars => {
//       res.status(200).json(cars);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to get post from database" });
//     });
// });

// Using HELPERS
router.get("/:id", (req, res) => {
  const { id } = req.params;
  carsDB
    .getById(id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

// router.post("/", (req, res) => {
//   knex
//     .insert(req.body, "id")
//     .into("cars")
//     .then(ids => {
//       res.status(201).json(ids);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Failed to insert post" });
//     });
// });

// USING HELPER
router.post("/", (req, res) => {
  // const { id } = req.params;
  carsDB
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to post cars" });
    });
});

module.exports = router;
