'use strict';
const bcryptjs = require('bcryptjs');

exports.encriptar = (key, texto) => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(texto, salt);
    return hash;
}

exports.descriptar = (key, texto, hash) => {
    const teste = bcryptjs.compareSync(texto, hash);
    return teste;
}