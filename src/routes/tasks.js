import { Router } from 'express'
const router = Router()
import {
	createTask,
	deleteTask,
	getTaskById,
	getTasks,
	getTasksByProject,
	updateTask,
} from '../controllers/task.controller'

router.get('/', getTasks)
router.get('/:id', getTaskById)
router.get('/project/:projectid', getTasksByProject)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

export default router
