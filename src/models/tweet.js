import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
  {
    title: String,
    description: String,
    username: String,
    email: String,
    
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.models.Tweet || mongoose.model("Tweet", tweetSchema);

export default Tweet;
