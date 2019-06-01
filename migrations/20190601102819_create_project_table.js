exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    //primary key that auto incrments
    tbl.increments();
    //name
    tbl
      .varchar('name', 255)
      .notNullable()
      .unique();
    //description
    tbl.varchar('description', 500).notNullable();
    //flag that indicates if the project is complete or not
    tbl
      .boolean('complete')
      .notNullable()
      .defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
