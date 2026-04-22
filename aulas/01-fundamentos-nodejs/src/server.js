import http from 'node:http';

// HTTP
// - Método HTTP
// - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar uma informação do back-end
// POST => Criar uma informação no back-end
// PUT => Atualizar uma informação no back-end
// PATCH => Atualizar uma informação esperífica de uma informação no back-end
// DELETE => Deletar uma informação no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criando um usuário no back-end

// GET - MÈTODO
// /users - URL

const server = http.createServer((req, res) => {

    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        return res.end('Listagem');
    }

    if (method === 'POST' && url === '/users') {
        return res.end('Criação de usuários')
    }

    return res.end('Hello World!');
})

server.listen(3333)
// localhost:3333
