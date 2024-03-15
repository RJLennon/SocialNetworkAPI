const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// /users
router.route('/users').get(getUsers).post(createUser);

// /users/:userId
router.route('/users/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


module.exports = router;
