const mongoose = require('./connectDB');

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ['男', '女'],
  },
  phone: Number,
  role: String,
  createTime: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
