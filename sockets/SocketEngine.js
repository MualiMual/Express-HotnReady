/*
Socket Engine
*/
module.exports = function (io) {
    
    io.on('connection', function(client) {  
        console.log('Client connected...');
        
        client.on('join', function(data) {
            console.log(data);
        });

    });
};