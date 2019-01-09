'use strict';
const aes256 = require('aes256');

exports.encriptar = (key, texto) => {
    let encriptado = aes256.encrypt(key, texto);
    return encriptado;
}

exports.descriptar = (key, texto) => {
    let descriptado = aes256.decrypt(key, texto);
    return descriptado;
}