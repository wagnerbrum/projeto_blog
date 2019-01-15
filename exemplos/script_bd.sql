CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    login VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255),
    criado_em DATETIME,
    ativo BOOL,
    email_confirmado BOOL
)ENGINE=INNODB;

INSERT INTO usuarios VALUES 
(null, 'usuario 1', 'login 1', 'email_1@email.com', '123123', '2019-01-15 01:01:01', 0, 0),
(null, 'usuario 2', 'login 2', 'email_2@email.com', '321321', '2019-01-14 02:02:02', 0, 0),
(null, 'usuario 3', 'login 3', 'email_3@email.com', '121212', '2019-01-13 03:03:03', 0, 0),
(null, 'usuario 4', 'login 4', 'email_4@email.com', '212121', '2019-01-12 04:04:04', 0, 0);