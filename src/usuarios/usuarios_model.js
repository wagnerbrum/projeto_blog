'use strict';

exports.getAll = (req, res, callback) => {
    req.connection.query('SELECT * FROM usuarios', callback);
}

exports.getById = (req, res, id, callback) => {
    req.connection.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
}

exports.getByLogin = (req, res, login, callback) => {
    req.connection.query('SELECT * FROM usuarios WHERE login = ?', [login], callback);
}

exports.add = (req, res, Usuario, callback) => {
    if(Usuario.login && Usuario.senha){
        delete req.body.senha; // Tirando a senha da resposta...
        req.connection.query('INSERT INTO usuarios VALUES (null, ?, ?, ?, ?, ?, 0, 0)', [Usuario.nome, Usuario.login, Usuario.email, Usuario.senha, Usuario.criado_em], callback);
    }else{
        callback('erro', null);
    }
}

exports.update = (req, res, id, Usuario, callback) => {
    if(Usuario){
        req.connection.query('UPDATE usuarios SET nome=?, login=?, email=?, senha=?, where id=?', [Usuario.nome, Usuario.login, Usuario.email, Usuario.senha, id], callback);
    }else{
        callback('erro', null);
    }
}

exports.delete = (req, res, id, callback) => {
    req.connection.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
}