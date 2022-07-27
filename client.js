const io = require('socket.io-client');
const socket = io.connect('http://udpserver-env.eba-rrpdgq34.ap-south-1.elasticbeanstalk.com:8080', {reconnect: true});

// Add a connect listener
//Udpserver-env.eba-rrpdgq34.ap-south-1.elasticbeanstalk.com
socket.on('connect', function (s) {
    console.log('Connected!');
    for (var i = 0; i < 100; i++) {
        socket.emit('data', i);
    }
});

socket.on('data',  (data)=> { 
    console.log(data)
});
