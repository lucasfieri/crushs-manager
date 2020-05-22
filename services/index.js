const Crush = require('../models/Crushs');
const { uuid } = require('uuidv4');

const getAllCrushs = async () => Crush.query().where('deleted_at', null);

const getCrushById = async (id) => Crush.query().findById(id);

const getCrushByName = async (name) => Crush.query().where('name', 'ilike', `%${name}%`).andWhere('deleted_at', null);

const createCrush = async (crush) => Crush.query().insert({ id: uuid(), ...crush });

const putCrush = async (id, crush) => Crush.query().patchAndFetchById(id, crush);

const patchCrush = async (id, crush) => Crush.query().patchAndFetchById(id, crush).catch(err => console.log(err));

const deleteCrush = async (id) => Crush.query().patch({ deleted_at: 'NOW()' }).where('id', id).findById(id);

module.exports = {
    getAllCrushs,
    getCrushById,
    getCrushByName,
    createCrush,
    putCrush,
    patchCrush,
    deleteCrush
}
