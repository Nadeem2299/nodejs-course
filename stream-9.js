const fs = require('fs');

const readerStream = fs.createReadStream('example.txt', 'utf8');

readerStream.on('data', (chunk) => { // data is an event emitted upon successful creation of many chunks 
    // when the data is so big with more content/video -- you would see many chunks
    console.log('========');
    // console.log(chunk.toString());
    console.log('New Chunk Arrived');
    console.log('========');
    console.log(chunk);
    console.log(Buffer.byteLength(chunk));
});

readerStream.on('end', () => { // end of an event emmitted upon all chunks are sent.
    console.log('********All chunks Arrived*********');
});

readerStream.on('error', (error) => { // end of an event when operation is over
console.log('**********It Is Over***********')
});