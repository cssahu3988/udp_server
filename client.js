const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', {reconnect: true});

// Add a connect listener
socket.on('connect', function (s) {
    console.log('Connected!');
    for (var i = 0; i < 100; i++) {
        socket.emit('data', i);
    }
});

socket.on('data',  (data)=> { 
    console.log(data)
});
