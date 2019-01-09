'use strict';

const aes256 = require('./aes256');
const bcryptjs = require('./bcryptjs');
const key_aes256 = process.env.KEY_AES256;
const key_bcryptjs = process.env.KEY_BCRYPTJS;

exports.criptografar = (texto) => {
    let encriptado = aes256.encriptar(key_aes256, bcryptjs.encriptar(key_bcryptjs, texto));

    return encriptado;
}

exports.comparar = (texto, hash) => {
    let descriptado = bcryptjs.descriptar(key_bcryptjs ,texto, aes256.descriptar(key_aes256, hash));

    return descriptado;
}