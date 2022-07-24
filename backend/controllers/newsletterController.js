// @desc Set projects
// @route POST /api/projects
// @access Private
const setNewsletter = async (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error('Please add a email');
  }
  const project = await axios.post('/newsletter');
  return project.data;
};

module.exports = { setNewsletter };
