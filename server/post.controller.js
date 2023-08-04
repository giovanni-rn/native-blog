// imports
const postModel = require("./post.model"); // database collection containing all posts
// const ObjectID = require("mongoose").Types.ObjectId; // verify ID is a true ObjectID

// fetch every post
module.exports.allPosts = (req, res) => {
  postModel
    .find({})
    .then((results) => {
      // Process the results
      res.status(200).send(results);
    })
    .catch((error) => {
      // Handle the error
      res.status(400).send("Error to get data : " + error);
    });
};

/*
// fetch one specific post
module.exports.onePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  postModel.findById(req.params.id, (err, docs) => {
    if (!err) return res.status(200).send(docs);
    else return res.status(400).send("Error to get data : " + err);
  });
}; 
*/

// research a post
module.exports.searchPost = (req, res) => {
  postModel
    .find({ title: { $regex: req.params.query, $options: "i" } })
    .then((results) => {
      // Process the results
      res.status(200).send(results);
    })
    .catch((error) => {
      // Handle the error
      res.status(400).send("Error to get data : " + error);
    });
};

// add one post to db
module.exports.addPost = async (req, res) => {
  const newPost = new postModel({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    category: req.body.category,
  });

  try {
    const post = await newPost.save();
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};
