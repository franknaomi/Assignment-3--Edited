const http = require('http');
const {handleBooks, handleAuthors} = require('./db/control')
const port = 3000;

async function handleRequest(req, res){
    try{
        // const body = await getBody(req);
        // const body = req.body
        // req.body = body;
        
        // handle books endpoint
        handleBooks(req,res);
     
      //  handle authors endpoint
        handleAuthors(req,res); 
        
    } catch (error) {
        res.statusCode = 500;
        res.end(error.message)
    }
}
const server = http.createServer(handleRequest);

server.listen(port, () =>{
    console.log(`Server listening on port: ${port}`)
})