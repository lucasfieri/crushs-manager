const knex = require('knex');
const configs = require('../knexfile');

const connectToDb = () => knex(configs.development);

module.exports = connectToDb;