const express = require('express');

const db = require('../models/actions');

const actionsRouter = express.Router();

const { getActions, addAction, deleteAction, updateAction } = db;

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

actionsRouter.delete('/:id', async (req, res) => {
  try {
    const count = await deleteAction(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The Action has been deleted' });
    } else {
      res.status(404).json({ message: 'The Action could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

actionsRouter.put('/:id', async (req, res) => {
  try {
    const action = await updateAction(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: 'The action could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = actionsRouter;
