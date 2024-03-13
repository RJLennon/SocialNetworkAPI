const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/users', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a single user by its _id and populated thought and friend data
router.get('/users/:id', async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.params.id }).populate('thoughts').populate('friends');
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
