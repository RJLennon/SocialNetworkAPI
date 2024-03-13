const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../controllers/userController');

// /users
router.route('/users').get(getUsers);

// /users/:userId
router.route('/users/:userId').get(getSingleUser);


module.exports = router;
