const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController')

router.get('/get', userController.getUsers);
router.post('/create', userController.createUsers);
router.put('/put/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser)

module.exports= router;