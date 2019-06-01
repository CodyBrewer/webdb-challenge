const express = require('express');

const db = require('../models/actions');

const actionsRouter = express.Router();

const { getActions, addAction } = db;

actionsRouter.use((req, res, next) => {
  console.log('actionsRouter working');
  next();
});

actionsRouter.get('/', async (req, res) => {
  try {
    const actions = await getActions();
    res.status(200).json(actions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

actionsRouter.post('/', async (req, res) => {
  try {
    const action = await addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = actionsRouter;
