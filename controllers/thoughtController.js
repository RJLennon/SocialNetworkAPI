const {Thought} = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughtData = await Thought.find();
      res.json(thoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //create a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete a thought
async deleteThought(req, res) {
  try {
    const dbThoughtData = await Thought.deleteOne({ _id: req.params.thoughtId });
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
},
  //update a thought
async updateThought(req, res) {
  try {
    const dbThoughtData = await Thought.updateOne(
      { _id: req.params.thoughtId },
      { $set: req.body }
    );
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
},
  //add a reaction to a thought
async addReaction(req, res) {
  try {
    const dbThoughtData = await Thought.updateOne(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true, runValidators: true}
    );
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
},
  //remove a reaction from a thought
async removeReaction(req, res) {
  try {
    const dbThoughtData = await Thought.updateOne(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } }
    );
    res.json(dbThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}
  
};
