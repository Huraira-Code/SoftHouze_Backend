import Project from "../models/project.model.js";
import { errorHandler } from "../utils/error.js";

export const createProject = async (req, res, next) => {
  const { title, description, thumbnail, liveUrl, githubUrl, technologies, date } = req.body;
  if (!title || !description || !date) {
    return next(errorHandler(400, "Please provide all required fields"));
  }
  const newProject = new Project({
    title,
    description,
    thumbnail,
    liveUrl,
    githubUrl,
    technologies,
    date,
    userId: req.body.userId || "anonymous",
  });
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          thumbnail: req.body.thumbnail,
          liveUrl: req.body.liveUrl,
          githubUrl: req.body.githubUrl,
          technologies: req.body.technologies,
          date: req.body.date,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json("The project has been deleted");
  } catch (error) {
    next(error);
  }
}; 