import mongoose from "mongoose";

const userTopicProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "topic",
    required: true,
  },
  subtopicId: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Done"], default: "Pending" },
});

const userTopicModel = mongoose.model("userTopicProgress", userTopicProgressSchema);
export default userTopicModel;