exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.string("transmission", 64);
    tbl.string("status of title", 64);
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("transmission", 64);
    tbl.dropColumn("status of title", 64);
  });
};
