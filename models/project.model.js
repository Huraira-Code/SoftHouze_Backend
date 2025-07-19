import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    technologies: [{
      type: String,
    }],
    date: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema); 