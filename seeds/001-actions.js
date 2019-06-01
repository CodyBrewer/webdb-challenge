exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Create Databases for projects and actions ',
          notes: 'use sqlite 3 and knex',
          completed: false,
          name: 'Create Database'
        },
        {
          project_id: 1,
          description: 'build endpoints for CRUD on projects and actions',
          notes: 'CRUD is the CRUDDIEST',
          completed: false,
          name: 'Build Endpoints'
        },
        {
          project_id: 2,
          description: 'Get Data for database of magic weapons',
          notes: 'need to find a list of a bunch of magic items',
          completed: false,
          name: 'Data for Magic Weapons'
        }
      ]);
    });
};
