import http from 'node:http';
import { json } from './middlewares/json.js';
import { Database } from './database.js';

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

// Stateful - Stateless

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados


// HTTP Status Code

// 100 - 199 Respostas informadas
// 200 - 299 Respostas bem-sucedidas
// 300 - 399 Mensagens de redirecionamento
// 400 - 499 Respostas de erro do cliente
// 500 - 599 Resposas de erro do servidor

const database = new Database

const server = http.createServer(async (req, res) => {

    const { method, url } = req;

    await json(req, res)

    if (method === 'GET' && url === '/users') {

        const users = database.select('users')

        return res.end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {

        const { name, email } = req.body

        const user = {
            id: 1,
            name,
            email
        };

        database.insert('users', user)

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end();
})

server.listen(3333)
// localhost:3333
