import http from 'node:http';

// Criar um usuário (nome, email, senha)

const server = http.createServer((req, res) => {
    return res.end('Hello World')
})

server.listen(3333)
// localhost:3333
