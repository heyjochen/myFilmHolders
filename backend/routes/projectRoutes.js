const express = require("express");
const router = express.Router();
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectsController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getProjects).post(protect, setProject);
router.route("/:id").delete(protect, deleteProject).put(protect, updateProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
