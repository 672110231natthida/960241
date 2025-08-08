const express = require('express');
const webSocket = require('ws');
const http = require('http');

const app = express();
const port = Process.env.PORT || 3000;

const server = http.createServer(app);
const wss = new webSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Echo the message back to the client
        //ws.send(`Server received: ${message}`);
        wss.clients.forEach(client => {
            if (client.readyState === webSocket.OPEN) {
                client.send(`Server received: ${message}`);
            }
        });
        });
    
    ws.send('new user joind');
    });
    
    
   
    

