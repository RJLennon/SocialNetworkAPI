const router = require('express').Router();
const { User } = require('../models');

// GET all users
router.get('/users', async (req, res) => {
  try {
    const userData = await User.find();
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
