const mongoose = require("mongoose");
const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    camera: String,
    lens: String,
    film: String,
    date: String,
    notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
