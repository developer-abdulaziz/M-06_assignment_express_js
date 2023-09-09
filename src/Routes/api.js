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
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.create);
router.get('/blog/delete', blogController.create);
router.get('/blog/update', blogController.create);

router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/create', blogDetailsController.read);
router.get('/blogDetails/create', blogDetailsController.delete);
router.get('/blogDetails/create', blogDetailsController.update);

router.get("/comment/read", commentController.read);
router.get("/comment/create", commentController.create);
router.get("/comment/delete", commentController.delete);
router.get("/comment/update", commentController.update);

router.get("/message/read", messageController.read);
router.get("/message/create", messageController.create);
router.get("/message/delete", messageController.delete);
router.get("/message/update", messageController.update);

router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/delete", portfolioController.delete);
router.get("/portfolio/update", portfolioController.update);

router.get("/product/read", productController.read);
router.get("/product/create", productController.create);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

router.get("/profit/read", profitController.read);
router.get("/profit/create", profitController.create);
router.get("/profit/delete", profitController.delete);
router.get("/profit/update", profitController.update);

router.get("/project/read", projectController.read);
router.get("/project/create", projectController.create);
router.get("/project/delete", projectController.delete);
router.get("/project/update", projectController.update);

router.get("/service/read", serviceController.read);
router.get("/service/create", serviceController.create);
router.get("/service/delete", serviceController.delete);
router.get("/service/update", serviceController.update);

router.get("/title/read", titleController.read);
router.get("/title/create", titleController.create);
router.get("/title/delete", titleController.delete);
router.get("/title/update", titleController.update);


// Export Router
module.exports=router;