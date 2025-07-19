import express from 'express';
import { createProject, getProjects, updateProject, deleteProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/create', createProject);
router.get('/getprojects', getProjects);
router.put('/updateproject/:projectId/:userId', updateProject);
router.delete('/deleteproject/:projectId/:userId', deleteProject);

export default router; 