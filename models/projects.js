const db = require('../data/dbConfig');

//return list of all projects

const getProjects = () => {
  return db('projects');
};

const getProject = id => {
  return db('projects')
    .join('projects', 'projects.id', 'actions.project_id')
    .where('projects.id', id)
    .select(
      'projects.id',
      'projects.name as Project Name',
      'actions.name as Action Name'
    );
};

//post new project
const addProject = project => {
  return db('projects').insert(project);
};

module.exports = { getProjects, addProject };
