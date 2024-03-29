const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

// /users
router.route('/users').get(getUsers).post(createUser);

// /users/:userId
router.route('/users/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /users/:userId/friends/:friendId
router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;
