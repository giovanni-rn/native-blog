// imports
const router = require("express").Router();
const postController = require("./post.controller.js");

// general api
router.get("/", postController.allPosts); // read all posts
router.post("/", postController.addPost); // add one new post

// specific api
// router.get("/:id", postController.onePost); // read one post
router.get("/search/:query", postController.searchPost); // search a post

// export
module.exports = router;
