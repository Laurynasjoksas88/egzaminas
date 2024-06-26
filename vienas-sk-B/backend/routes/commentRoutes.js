const express = require("express");
const router = express.Router();

const {
  createComment,
  getCommentsByAdId,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");


const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");


router.post("/ad/:id", verifyToken, createComment);
router.get("/ad/:id", getCommentsByAdId);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);

module.exports = router;
