import { Router } from 'express'
const router = Router()
import {
	createProject,
	deleteProject,
	getProjectById,
	getProjects,
	updateProject,
} from '../controllers/project.controller'

router.get('/', getProjects)
router.get('/:id', getProjectById)
router.post('/', createProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

export default router
