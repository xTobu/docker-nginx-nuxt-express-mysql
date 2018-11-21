const express = require('express');
const router = express.Router();
const request = require('request');
const userController = require('../../controllers/api/user');

router.get("/", userController.get_index);
router.post("/", userController.post_index);

module.exports = router;