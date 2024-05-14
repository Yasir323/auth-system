const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String, default: '' },
  name: { type: String, default: '' },
  bio: { type: String, default: '' },
  phone: { type: String, default: '' },
  isPublic: { type: Boolean, default: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
