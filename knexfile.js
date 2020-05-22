require('dotenv').config();
const path = require('path');

const migrationsPath = path.resolve(__dirname, 'database', 'migrations');
const seedsPath = path.resolve(__dirname, 'database', 'seeds');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        },
        pool: {
            min: 1,
            max: 7,
        },
        migrations: {
            directory: migrationsPath,
        },
        seeds: {
            directory: seedsPath,
        }
    }
}