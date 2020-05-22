const { uuid } = require('uuidv4');

exports.seed = async (knex) => {
    await knex('tbl_crushs').insert([
        { id: uuid(), name: 'Caique Mitsuoka', age: 26, gender: 'M', description: 'interested' },
        { id: uuid(), name: 'Ariana Grande', age: 26, gender: 'F', description: 'admiration' },
        { id: uuid(), name: 'Luxanna Crownguardd', age: 19, gender: 'F', description: 'my main' },
    ])
}