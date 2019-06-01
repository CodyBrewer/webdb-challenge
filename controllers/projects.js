const express = require('express');

const knex = require('knex');
const knexConfig = require('../knexfile');
const knexDb = knex(knexConfig.development);

const db = require('../models/projects');

const projectsRouter = express.Router();

const {
  getProjects,
  addProject,
  getProject,
  getActionsByProject,
  deleteProject,
  updateProject
} = db;

projectsRouter.use((req, res, next) => {
  console.log('projectsRouter working');
  next();
});

projectsRouter.get('/', async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
});

projectsRouter.post('/', async (req, res) => {
  try {
    const project = await addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

projectsRouter.get('/:id', async (req, res) => {
  try {
    const actions = await getActionsByProject(req.params.id);
    const project = await getProject(req.params.id);
    project.length !== 0
      ? res.status(200).json({
          project: [...project],
          actions: actions
        })
      : res
          .status(404)
          .json({ errorMessage: 'A project with that ID could not be found.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

projectsRouter.delete('/:id', async (req, res) => {
  try {
    const count = await deleteProject(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The Project has been deleted' });
    } else {
      res.status(404).json({ message: 'The Project could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

projectsRouter.put('/:id', async (req, res) => {
  try {
    const project = await updateProject(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'The project could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = projectsRouter;
