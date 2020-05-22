const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        return res.json({teste: 'success'});
    } catch (error) {
        
    }
});

module.exports = router;