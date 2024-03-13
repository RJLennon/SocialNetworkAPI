const db = require('../config/connection');
const { Thought, User } = require('../models');
const thoughtSeeds = require('./thoughtSeeds.json');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Thought', 'thought');
  await cleanDB('User', 'user');
  await Thought.create(thoughtSeeds);
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});
