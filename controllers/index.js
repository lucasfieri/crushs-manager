const express = require('express');
const router = express.Router();

const {
    getAllCrushs,
    getCrushById,
    getCrushByName,
    createCrush,
    patchCrush,
    putCrush,
    deleteCrush
} = require('../services');

router.get('/', async (req, res) => {
    try {
        const crushs = await getAllCrushs();
        return res.status(200).json(crushs);
    } catch (error) {
        return res.status(500).json({error});
    }
});

router.get('/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const crush = await getCrushByName(name);
        return res.status(200).json(crush);
    } catch (error) {
        return res.status(500).json({error});
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, age, gender, description } = req.body;
        const crush = await createCrush({ name, age, gender, description });
        return res.status(200).json(crush);
    } catch (error) {
        return res.status(500).json({error});
    }
});

router.put('/', async (req, res) => {
    try {
        const { id, name, age, gender, description } = req.body;
        const crush = await putCrush(id, { name, age, gender, description });
        return res.status(200).json(crush);
    } catch (error) {
        return res.status(500).json({error});
    }
});

router.patch('/', async (req, res) => {
    try {
        const { id, ...crushInfo } = req.body;
        const crush = await patchCrush(id, { ...crushInfo });
        return res.status(200).json(crush);
    } catch (error) {
        return res.status(500).json({error});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCrush(id);
        const crush = await getCrushById(id);
        return res.status(200).json({ name: crush.name });
    } catch (error) {
        return res.status(500).json({error});
    }
});

module.exports = router;