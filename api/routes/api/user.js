const express = require('express');
const router = express.Router();
const request = require('request');
const userController = require('../../controllers/api/user');

router.get("/", userController.getUsers);
router.post("/", userController.postUser);

module.exports = router;