const express = require("express");
const router = express.Router();
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectsController");

router.route("/").get(getProjects).post(setProject);
router.route("/:id").delete(deleteProject).put(updateProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
