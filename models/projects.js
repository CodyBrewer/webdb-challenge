const db = require('../data/dbConfig');

//return list of all projects

const getProjects = () => {
  return db('projects');
};

const getActionsByProject = id => {
  return db('projects')
    .innerJoin('actions', 'actions.project_id', 'projects.id')
    .select('actions.*')
    .where('projects.id', id);
};

const getProject = id => {
  return db('projects').where({ id: id });
};

//post new project
const addProject = project => {
  return db('projects').insert(project);
};

const deleteProject = id => {
  return db('projects')
    .where({ id })
    .delete();
};

const updateProject = (id, changes) => {
  return db('projects')
    .where({ id })
    .update(changes);
};
module.exports = {
  getProjects,
  addProject,
  getActionsByProject,
  getProject,
  deleteProject,
  updateProject
};
