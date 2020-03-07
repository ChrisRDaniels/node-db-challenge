exports.seed = function(knex) {
 // Deletes ALL existing entries
 return knex("project")
  .del()
  .truncate()
  .then(function() {
   // Inserts seed entries
   return knex("project").insert([
    { id: 1, name: "project1" },
    { id: 2, name: "project2" },
    { id: 3, name: "project3" }
   ]);
  });
};
