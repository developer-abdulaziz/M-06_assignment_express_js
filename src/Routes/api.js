// Call Express js
const express = require('express');

// Make Router Object From Express.js
const router = express.Router();


// Import all controllers
const blogController = require('../Controllers/blogController');

const blogDetailsController = require('../Controllers/blogDetailsController');

const commentController = require('../Controllers/commentController');

const messageController = require('../Controllers/messageController');

const portfolioController = require('../Controllers/portfolioController');

const profitController = require('../Controllers/profitController');

const projectController = require('../Controllers/projectController');

const serviceController = require('../Controllers/serviceController');

const titleController = require('../Controllers/titleController');


// Route all requests to the appropriate controller
router.get();