const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const projectsRouter = require('../controllers/projects');
const actionsRouter = require('../controllers/actions');

const server = express();

server.use(helmet());
server.use(logger('dev'));
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
