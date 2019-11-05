exports.up = function(knex) {
  return knex.schema.createTable("cars", function(table) {
    // adds a primary key, called 'id' as and auto-increment integer, not null and unique
    table.increments();

    table.string("vin", 64).notNullable();
    table.string("make", 64).notNullable();
    table.string("model", 64).notNullable();
    table.string("mileage", 64).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
