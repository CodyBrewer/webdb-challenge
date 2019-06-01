exports.up = function(knex, Promise) {
  return knex.schema.table('projects', tbl => {
    tbl.renameColumn('complete', 'completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('projects', tbl => {
    tbl.renameColumn('completed', 'complete');
  });
};
