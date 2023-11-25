
const { WebSocketServer } = require('ws');
const http = require('http');

const PORT = 8000;

// Spinning the HTTP server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
server.listen(PORT, () => {
    console.log(`WebSocket server is running on port ${PORT}`);
});
