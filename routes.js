const express = require('express');
const { ExpressAdapter } = require('ask-sdk-express-adapter');

const skill = require('./dist/custom/index');

const alexaApp = express();

const adapter = new ExpressAdapter(skill.handler, false, false);

alexaApp.post('/', adapter.getRequestHandlers());

module.exports = alexaApp;