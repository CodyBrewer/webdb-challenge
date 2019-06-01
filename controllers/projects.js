const express = require('express');

const db = require('../models/projects');

const projectsRouter = express.Router();

const { getProjects, addProject, getProject } = db;

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

module.exports = projectsRouter;
