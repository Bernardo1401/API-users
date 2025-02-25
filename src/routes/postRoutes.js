const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/user", postController.getAllPosts);
router.post("/user", postController.addPost);
router.get("/post:id", postController.getPostById);
router.put("/post:id", postController.updatePost);
router.delete("/post:id", postController.deletePost);

module.exports = router;