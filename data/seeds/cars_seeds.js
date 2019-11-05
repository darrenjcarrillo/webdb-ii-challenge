exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: 11212,
          make: "Toyota",
          model: "Solara",
          mileage: "112123",
          transmission: "Transmission",
          "status of title": "Clean"
        },
        {
          vin: 2232,
          make: "Mercedes",
          model: "Nice Model",
          mileage: "asdasd",
          transmission: "Transmission",
          "status of title": "Salvage"
        },
        {
          vin: 34434,
          make: "MBW",
          model: "Good one",
          mileage: "1123212123",
          transmission: "Transmission",
          "status of title": "Clean"
        },
        {
          vin: 123123,
          make: "Ford",
          model: "Nice one",
          mileage: "2123545",
          transmission: "Transmission",
          "status of title": "Salvage"
        }
      ]);
    });
};
