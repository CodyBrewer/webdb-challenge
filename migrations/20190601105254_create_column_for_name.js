exports.up = function(knex, Promise) {
  return knex.schema.table('actions', tbl => {
    tbl
      .varchar('name', 255)
      .notNullable()
      .defaultTo('action_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('actions', tbl => {
    tbl.dropColumn('name');
  });
};
