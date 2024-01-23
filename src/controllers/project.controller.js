import Project from '../models/Project.js'

export async function getProjects(req, res) {
	try {
		const projects = await Project.findAll()
		res.status(200).json({
			data: projects,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function getProjectById(req, res) {
	try {
		const { id } = req.params
		const project = await Project.findOne({
			where: {
				id,
			},
		})
		res.status(200).json({
			data: project,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function createProject(req, res) {
	try {
		const { name, priority, description, deliverydate } = req.body
		const newProject = await Project.create(
			{
				name,
				priority,
				description,
				deliverydate,
			},
			{
				fields: ['name', 'priority', 'description', 'deliverydate'],
			}
		)
		if (newProject) {
			res.status(200).json({
				message: 'Project successfully created',
				data: newProject,
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function deleteProject(req, res) {
	try {
		const { id } = req.params
		const deleteRowCount = await Project.destroy({
			where: {
				id,
			},
		})
		res.status(200).json({
			message: 'Project successfully deleted',
			count: deleteRowCount,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}

export async function updateProject(req, res) {
	try {
		const { id } = req.params
		const { name, priority, description, deliverydate } = req.body
		const projects = await Project.findAll({
			attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
			where: {
				id,
			},
		})
		if (projects.length > 0) {
			projects.forEach(async (project) => {
				await project.update({
					name,
					priority,
					description,
					deliverydate,
				})
			})
		}
		res.status(200).json({
			message: 'Project successfully updated',
			data: projects,
		})
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: {},
		})
	}
}
