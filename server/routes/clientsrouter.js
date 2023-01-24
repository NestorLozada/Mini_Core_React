const express = require("express");

const router = express();

router.get('/', (req, res) =>{
    res.json({
        status: 'Si vale'
    })
});

module.exports = router;