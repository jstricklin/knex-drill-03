
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
          {name:"Breath of the Wild", developer:"Nintendo", rating:8.5},
          {name:"Fez", developer:"Polytron", rating:7.4},
          {name:"Anti-Chamber", developer:"Demruth", rating:8.1},

      ]);
    });
};
