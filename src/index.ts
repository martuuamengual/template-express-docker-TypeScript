import express from 'express'

// Constants
const PORT = 8080; // Remember if yo change this port yo must change it in Dockerfile too.
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});



const server = app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

export default server;