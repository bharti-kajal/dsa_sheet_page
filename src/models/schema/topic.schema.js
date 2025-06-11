import mongoose from "mongoose";

const subtopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  leetcode: {
    type: String
  },
  youTube: {
    type: String
  },
  articleLink: {
    type: String
  },
  level: {
    type: String
  },
  status: {
    type: String,
    enum: ['Done', 'Pending'],
    default: 'Pending'
  }
}, {timestamps: true});

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subtopics: {
    type: [subtopicSchema],
    default: []
  },
   status: {
    type: String,
    enum: ['Done', 'Pending'],
    default: 'Pending'
  }
}, {timestamps: true});

const topicModel = mongoose.model("topic", topicSchema);
export default topicModel;