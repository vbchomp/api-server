'use strict'

// 3rd party dependencies
const express = require('express');
const morgan = require('morgan');

// instantiate
const app = express();

// Error handlers, Routes, and our own modules
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500.js');

const catRoutes = require('./routes/cat.js');
const dogRoutes = require('./routes/dog.js');

// Global Middleware
app.use(morgan('dev')); // This is a 3rd party logger
app.use(express.json());

// Use our routes
app.use(catRoutes);
app.use(dogRoutes);

// Error handlers -- need to be defined last!!
app.use('*', handle404);
app.use(handle500);

// Export an object with the express app and start method
module.exports = {
    server: app,
    start: port => {
        if (!port) { throw new Error('Missing your Port, Cap\'n'); }
        app.listen(port, () => console.log(`Listening on port ${port}`));
    },
};