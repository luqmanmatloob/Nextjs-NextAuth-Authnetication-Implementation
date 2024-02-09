// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
