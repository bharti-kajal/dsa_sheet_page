class CommonRepository {
  // 1.Search user using email
  async findbyEmail(model, email) {
    try {
      return await model.findOne({ email: email });
    } catch (err) {
      console.log("Error ", err);
    }
  }

  // 2. Create User
  async create(model, user) {
    try {
      const newUser = new model(user);
      await newUser.save();
      return newUser; // return saved user
    } catch (err) {
      throw err;
    }
  }

  // 3. Update status of subtopics
  async subTopicStatus(model, topicId, subtopicId, userId, status) {
    try {
      const result = await model.findOneAndUpdate(
        { topicId, subtopicId, userId },
        { $set: { status } },
        { new: true, upsert: true }
      );
      return result;
    } catch (err) {
      throw err;
    }
  }

  // 4.Search user using Id
  async findById(model, id) {
    try {
      return await model.findOne({ _id: id });
    } catch (err) {
      console.log("Error ", err);
    }
  }

  // 5. Find user by id and projection
  async findByIdUser(model, id) {
    try {
      return await model.findOne({ _id: id }).select("name email");
    } catch (err) {
      console.log("Error ", err);
    }
  }

  async getTopicsWithUserStatus(topicModel, userTopicModel, userId) {
    try {
      const topics = await topicModel.find({}).lean();
      const userProgressList = await userTopicModel.find({ userId }).lean();

      // topic status
      const progressMap = {};
      userProgressList.forEach((item) => {
        progressMap[`${item.topicId}_${item.subtopicId}`] = item.status;
      });

      // insert subtopic status + calculate topic status
      const modifiedTopics = topics.map((topic) => {
        let allSubtopicsDone = true;

        const updatedSubtopics = topic.subtopics.map((sub) => {
          const status = progressMap[`${topic._id}_${sub._id}`] || "Pending";
          if (status !== "Done") {
            allSubtopicsDone = false;
          }
          return { ...sub, status };
        });

        const topicStatus = allSubtopicsDone ? "Done" : "Pending";

        return {
          ...topic,
          status: topicStatus,
          subtopics: updatedSubtopics,
        };
      });

      return modifiedTopics;
    } catch (error) {
      console.error("Error in getTopicsWithUserStatus:", error);
      throw error;
    }
  }
}

export default CommonRepository;
