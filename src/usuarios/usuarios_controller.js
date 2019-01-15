'use strict';

const usuarios_model = require('./usuarios_model');
const criptografia = require('../libs/criptografia/cripto_dupla');
const class_data = require('../libs/data/data');

// exports.getAll = (req, res) => {
//     try{
//         let data = usuarios_model.getAll();
//         res.status(200).json({
//             Usuarios: data
//         })
//     } catch (err) {
//         res.status(400).json({
//             data: [],
//             error: err
//         })
//     }
// }

exports.getAll = (req, res) => {
    usuarios_model.getAll(req, res, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
}

exports.getById = (req, res) => {
    usuarios_model.getById(req, res, req.params.id, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}

exports.getByLogin = (req, res) => {
    usuarios_model.getByLogin(req, res, req.body.login, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}

exports.add = (req, res) => {
    req.body.senha = criptografia.criptografar(req.body.senha);
    req.body.criado_em = class_data.data_atual();
    usuarios_model.add(req, res, req.body, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(req.body);
        }
    });
}

exports.update = (req, res) => {
    usuarios_model.update(req, res, req.params.id, req.body, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(req.body);
        }
    });
}

exports.delete = (req, res) => {
    usuarios_model.delete(req, res, req.params.id, (err, data) => {
        if(err){
            res.json(err);
        }else{
            res.json(req.body);
        }
    });
}