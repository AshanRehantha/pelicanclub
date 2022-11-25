const express = require('express');
const router = express.Router();

const todoController = require('../module/todo/todo.controller');

router.post('/add', todoController.todoAddController);
router.post('/list', todoController.todoListController);
router.post('/update', todoController.todoUpdateController);

module.exports = router;