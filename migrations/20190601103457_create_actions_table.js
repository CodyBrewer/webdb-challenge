exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    //primary key that auto increments
    tbl.increments();
    //project_id
    tbl
      .integer('project_id')
      .unsigned()
      .references('id') // column
      .inTable('projects') //table
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    //description of what needs to be done
    tbl.varchar('description', 500).notNullable();
    //notes column to add additional information
    tbl.varchar('notes', 500);
    //flag that indiceates if the action has been complated
    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
