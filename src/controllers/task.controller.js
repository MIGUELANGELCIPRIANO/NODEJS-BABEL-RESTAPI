import Task from '../models/Tasks'

export async function getTasks(req, res) {
	try {
		const tasks = await Task.findAll({
			attributes: ['id', 'projectid', 'name', 'done'],
			order: [['id', 'ASC']],
		})
		res.status(200).json(tasks)
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function getTaskById(req, res) {
	try {
		const { id } = req.params
		const task = await Task.findOne({
			where: {
				id,
			},
		})
		res.status(200).json({
			data: task,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function getTasksByProject(req, res) {
	try {
		const { projectid } = req.params
		const tasks = await Task.findAll({
			attributes: ['id', 'name', 'done', 'projectid'],
			where: {
				projectid,
			},
		})
		res.status(200).json({
			data: tasks,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function createTask(req, res) {
	try {
		const { name, done, projectid } = req.body
		const newTask = await Task.create(
			{
				name,
				done,
				projectid,
			},
			{
				fields: ['name', 'done', 'projectid'],
			}
		)
		if (newTask) {
			res.status(200).json({
				message: 'Task successfully created',
				data: newTask,
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function deleteTask(req, res) {
	try {
		const { id } = req.params
		const deleteRowCount = await Task.destroy({
			where: {
				id,
			},
		})
		res.status(200).json({
			message: 'Task successfully deleted',
			count: deleteRowCount,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function updateTask(req, res) {
	try {
		const { id } = req.params
		const { name, done, projectid } = req.body
		const tasks = await Task.findAll({
			attributes: ['id', 'name', 'done', 'projectid'],
			where: {
				id,
			},
		})
		if (tasks.length > 0) {
			tasks.forEach(async (task) => {
				await task.update({
					name,
					done,
					projectid,
				})
			})
		}
		res.status(200).json({
			message: 'Task successfully updated',
			data: tasks,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}
