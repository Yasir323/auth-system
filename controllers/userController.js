const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.editUserProfile = async (req, res) => {
  const { photo, name, bio, phone, email, password, isPublic } = req.body;
  const userFields = { photo, name, bio, phone, email, isPublic };
  if (password) {
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(password, salt);
  }
  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    user = await User.findByIdAndUpdate(req.user.id, { $set: userFields }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.listPublicProfiles = async (req, res) => {
  try {
    const users = await User.find({ isPublic: true }).select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getAllProfiles = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
