const events = require('events');

const eventEmitter = new events.EventEmitter(); // creating an obj for event emitter class

// lets define custom event
eventEmitter.on('open_connection', (data) => {
    console.log("Connection opened successfully");
    console.log(data);
    eventEmitter.emit('data_received');  // will only work if data_received before emit of open_connection
});

eventEmitter.on('data_received', () => {
    console.log('data received successfully')
})

eventEmitter.emit('open_connection'); // triggering the custom event 
// eventEmitter.emit('data_received');

console.log('Program ended');