'use strict';

exports.data_atual = () => {
    let data_atual = new Date();
    return `${data_atual.getFullYear()}-${data_atual.getMonth()}-${data_atual.getDate()} ${data_atual.getHours()}:${data_atual.getMinutes()}:${data_atual.getSeconds()}`;
}