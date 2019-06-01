exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Project Tracker',
          description:
            "an application for managing Projects and Actions in the spirit of David Allen's Getting Things Done (GTD) methodology.",
          completed: false
        },
        {
          name: 'Magic Weapon Catalog',
          description:
            'Magic Weapon Catalog used to organize magic weapons for Dungeon Masters',
          completed: false
        }
      ]);
    });
};
