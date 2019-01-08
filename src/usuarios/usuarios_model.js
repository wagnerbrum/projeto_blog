'use strict';

exports.getAll = (req, res, callback) => {
    req.connection.query('SELECT * FROM usuarios', callback);
}

exports.getById = (req, res, id, callback) => {
    req.connection.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
}

exports.add = (req, res, Usuario, callback) => {
    if(Usuario.nome){
        req.connection.query('INSERT INTO usuarios VALUES (null, ?)', [Usuario.nome], callback);
    }else{
        callback('erro', null);
    }
}

exports.update = (req, res, id, Usuario, callback) => {
    if(Usuario){
        req.connection.query('UPDATE usuarios SET nome=? where id=?', [Usuario.nome, id], callback);
    }else{
        callback('erro', null);
    }
}

exports.delete = (req, res, id, callback) => {
    req.connection.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
}