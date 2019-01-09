const express = require('express');
const router = express.Router();
const criptografia = require('../libs/criptografia/cripto_dupla');

router.get('/', function (req, res, next) {
    req.connection.query('SELECT * FROM usuarios', (err, usuarios) => {
        if(err) return next(err);
        res.json(usuarios);
    });
});

/* Criptografia usando apenas AES256 */
router.get('/aes256_en', function (req, res, next) {
    console.log("Encriptar =>");
    let encriptado = aes256.encriptar('121212', 'Wagner');
    res.json(encriptado);
    console.log(encriptado);
});

router.get('/aes256_des', function (req, res, next) {
    console.log("Descriptar =>");
    let descriptado = aes256.descriptar('121212', 'f3d/5Q3kPE8rbVM4B6FyZqflj4jWLA==');
    res.json(descriptado);
    console.log(descriptado);
});

/* Criptografia usando apenas BCRYPTJS */
router.get('/bcryptjs_en', function (req, res, next) {
    console.log("Encriptar =>");
    let encriptado = bcryptjs.encriptar('121212', 'Wagner');
    res.json(encriptado);
    console.log(encriptado);
});

router.get('/bcryptjs_des', function (req, res, next) {
    console.log("Descriptar =>");
    let descriptado = bcryptjs.descriptar('121212', 'Wagner', '$2a$10$JUC4aVIWb4P/i0EQZ9KDv.zbfEbgEsrnLrovcvsJwpE2nhsZVyYoc');
    res.json(descriptado);
    console.log(descriptado);
});

/* Criptografia usando AES256 e BCRYPTJS com keys manuais*/
router.get('/dupla_en', function (req, res, next) {
    console.log("Encriptar =>");
    let key1 = '1212';
    let key2 = '2121';

    let encriptado = aes256.encriptar(key1, bcryptjs.encriptar(key2, 'Wagner'));
    res.json(encriptado);
    console.log(encriptado);
});

router.get('/dupla_des', function (req, res, next) {
    console.log("Descriptar =>");
    let key1 = '1212';
    let key2 = '2121';

    let descriptado = bcryptjs.descriptar(key2 ,'Wagner', aes256.descriptar(key1, 'bq1Rki5INC8X1gDeI2Hqj+eIfoEmTDHvmLwPkAXY0TvqPZmVGZ2RZdmqbY/RUfOIanT1Z/iMIfn36hsZjjpdEy7OEx4CYyAwF4j2mg=='));
    
    res.json(descriptado);
    console.log(descriptado);
});

router.get('/dupla-en', function (req, res, next) {
    console.log("Encriptar =>");

    let encriptado = criptografia.criptografar('Wagner');
    res.json(encriptado);
    console.log(encriptado);
});

/* Criptografia usando AES256 e BCRYPTJS com keys configuradas no .env*/
router.get('/dupla-des', function (req, res, next) {
    console.log("Descriptar =>");

    let validacao = criptografia.comparar('Wagner', 'DVu2ukRmPHoPiO+0U0g92BUYD8Os3Rs68bWkd/P7j60oPzKisyaNJ1gehrzARQeiZ3G9ATCRKmitBaZlobIkCOwZLOsigRqw+j1wTw==');
    res.json(validacao);
    console.log(validacao);
});

module.exports = router;