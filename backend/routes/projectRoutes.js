const express = require("express");
const router = express.Router();
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectsController");

router.get("/", getProjects);

router.post("/", setProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

module.exports = router;
