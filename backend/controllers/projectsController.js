const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");

// @desc Get projects
// @route GET /api/projects
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

// @desc Set projects
// @route POST /api/projects
// @access Private
const setProject = asyncHandler(async (req, res) => {
  console.log(req.body.title);
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a title");
  }
  const project = await Project.create({
    title: req.body.title,
    camera: req.body.camera || "No Camera provided",
    lens: req.body.lens || "No Lens provided",
    film: req.body.film || "No Film provided",
    date: req.body.date || "No Date provided",
    notes: req.body.notes || "No Notes added",
  });
  res.status(200).json(project);
});

// @desc Update projects
// @route PUT /api/projects/id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProject);
});
// @desc Delete projects
// @route DELETE /api/projects/id
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  }
  await project.remove();
  res.status(200).json({
    message: `Deleted project with title ${req.body.title} and ID ${req.params.id}`,
  });
});

module.exports = { getProjects, setProject, updateProject, deleteProject };
