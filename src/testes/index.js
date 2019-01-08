const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    req.connection.query('SELECT * FROM usuarios', (err, usuarios) => {

        if(err) return next(err);
        res.json(usuarios);

        // não preciso me preocupar em devolver a conexão para o pool
    });
});

module.exports = router;