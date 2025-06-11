import CommonRepository from "../models/repository/common.repository.js";
import topicModel from "../models/schema/topic.schema.js";
class TopicController {
  constructor() {
    this.commonRepository = new CommonRepository();
  }

  // View DSA Topics
  async viewTopic(req, res) {
    try {
      const result = await this.commonRepository.getTopics(topicModel);
      console.log("result", result);
      if (result) {
        res.status(200).json({ status: true, topics: result });
      } else {
        res
          .status(400)
          .json({ status: false, message: "Something went wrong" });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  }

  // Update Subtopic and topic status
  async subTopicStatus(req, res) {
    try {
      const { topicId, subtopicId, status } = req.body;

      // Match topics and subtopics ara corerct
      // Update subtopic status
      const topic = await this.commonRepository.subTopicStatus(
        topicModel,
        topicId,
        subtopicId,
        status
      );
      if (!topic) {
        return res
          .status(404)
          .json({ message: "Topic ID or Subtopic ID not found" });
      }

      // Check if all subtopics are now 'Done'
      const allDone = topic.subtopics.every((sub) => sub.status === "Done");

      // Update topic status accordingly
      topic.status = allDone ? "Done" : "Pending";
      await topic.save();

      return res.status(200).json({ status: true, message: "Status updated" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ status: false, message: "Server Error" });
    }
  }

  // List of Prgoress
  async progress(req, res) {
    try {
      const topics = await this.commonRepository.getTopics(topicModel);

      const result = topics.map((topic) => {
        const levels = { Easy: [], Medium: [], Hard: [] };

        topic.subtopics.forEach((sub) => {
          if (levels[sub.level]) {
            levels[sub.level].push(sub.status === "Done");
          }
        });

        const progress = {};
        for (const level in levels) {
          const total = levels[level].length;
          const done = levels[level].filter(Boolean).length;
          progress[level] = total
            ? ((done / total) * 100).toFixed(2) + "%"
            : "0%";
        }

        return {
          topicName: topic.name,
          progress,
          topicStatus: topic.status,
        };
      });

      res.status(200).json({ status: true, progress: result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  }
}

export default TopicController;
