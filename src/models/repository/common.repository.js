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
  async subTopicStatus(model, topicId, subtopicId, status) {
    try {
      const result = await model.findOneAndUpdate(
        { _id: topicId, "subtopics._id": subtopicId },
        { $set: { "subtopics.$.status": status } },
        { new: true }
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

  // 6. get Topics
  async getTopics(model) {
    try {
      const result = await model.find({});
      return result;
    } catch (err) {
      console.log("Error in fetching lists", err);
      throw err;
    }
  }
}

export default CommonRepository;
