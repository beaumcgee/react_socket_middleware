
const { WebSocketServer } = require('ws');
const http = require('http');
const { v4: uuidv4 } = require('uuid');

const PORT = 8000;

// Spinning the HTTP server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });

clients = {}

function handleDisconnect(userId) {
    console.log(`User disconnected!`);
    delete clients[userId];
    console.log('Num active connections: ' + Object.keys(clients).length)
}

wsServer.on('connection', (connection) => {
    console.log('User connected!')

    const userId = uuidv4();
    clients[userId] = connection;

    console.log('Num active connections: ' + Object.keys(clients).length)

    connection.on('close', () => handleDisconnect(userId));

    connection.on('message', (msg) => {
        console.log(`Received : ${msg}`)
    })
})

server.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`);
});

setInterval(() => {
    // Send new data to each client
    for (var id in clients) {
        let rand = Math.round(Math.random() * 1000);
        clients[id].send(rand)
    }
    console.log('Clients: ' + Object.keys(clients).length)

}, 3000)
