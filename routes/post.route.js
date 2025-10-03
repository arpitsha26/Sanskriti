import express from "express";
import { addComment, deleteComment, getAllPosts, toggleLikePost, uploadPost } from "../controllers/Post.controller.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { uploadImage } from "../middlewares/multer.js";



const postrouter=express.Router();

postrouter.post("/upload", isAuth, uploadImage.single("image"), uploadPost);
postrouter.get("/", getAllPosts);


postrouter.put("/:postId/like", isAuth, toggleLikePost);


postrouter.post("/:postId/comment", isAuth, addComment);


postrouter.delete("/:postId/comment/:commentId", isAuth, deleteComment);




export default postrouter;

//fhedvkjsbcjlmlkasmfkjnenjgdfk