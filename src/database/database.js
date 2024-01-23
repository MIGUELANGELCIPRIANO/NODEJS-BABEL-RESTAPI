import Sequelize from 'sequelize'
import 'dotenv/config'

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env

export const sequelize = new Sequelize(
	`${DB_NAME}`,
	`${DB_USER}`,
	`${DB_PASSWORD}`,
	{
		host: 'localhost',
		dialect: 'postgres',
		pool: {
			max: 5,
			min: 0,
			require: 30000,
			idle: 10000,
		},
	}
)
