const db = require("../data/dbConfig.js");

module.exports = {
  find,
  getById,
  insert
};

// find Helper
async function find(query = {}) {
  const { limit = 2, sortby = "id", sortdir = "desc" } = query;

  let rows = await db("cars")
    .orderBy(sortby, sortdir)
    .limit(limit);

  return rows;
}

// find by id
function getById(id) {
  return db("cars")
    .where({ id })
    .first();
}
// insert
function insert(car) {
  return db("cars")
    .insert(car)
    .then(ids => {
      return getById(ids[0]);
    });
}
