const asyncHandler = require("express-async-handler");

// @desc Get projects
// @route GET /api/projects
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get projects" });
});

// @desc Set projects
// @route POST /api/projects
// @access Private
const setProject = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set projects" });
});
// @desc Update projects
// @route PUT /api/projects/id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});
// @desc Delete projects
// @route DELETE /api/projects/id
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getProjects, setProject, updateProject, deleteProject };
