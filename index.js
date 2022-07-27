const app = require('express');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log(data)
        socket.emit('data', "welcome from the server");
    });
});
const port = process.env.PORT || 8080;
server.listen(port,(socket)=>{
    console.log('Server running at http://localhost:8080');
});