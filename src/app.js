import express, { json } from 'express'
import morgan from 'morgan'

// routes
import projectRoutes from './routes/projects.js'
import taskRoutes from './routes/tasks.js'

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(json())

app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)

export default app
