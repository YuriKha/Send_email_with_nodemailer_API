const http = require('http'); 
const app=require('./app'); 

const server=http.createServer(app);

const port= process.env.PORT; 

server.listen(port,()=>{ 
    console.log('you started the "Send mail" microservice on port: ',port);
});