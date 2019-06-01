const db = require('../data/dbConfig');

//return list of all actions

const getActions = () => {
  return db('actions');
};

const addAction = action => {
  return db('actions').insert(action);
};
const deleteAction = id => {
  return db('actions')
    .where({ id })
    .delete();
};
const updateAction = (id, changes) => {
  return db('actions')
    .where({ id })
    .update(changes);
};
module.exports = { getActions, addAction, deleteAction, updateAction };
