const db = require('../data/dbConfig');

//return list of all actions

const getActions = () => {
  return db('actions');
};

const addAction = action => {
  return db('actions').insert(action);
};

module.exports = { getActions, addAction };
