const http = require("http")
const port = 3000


const routes = {
    '/' : 'Main Page - Library',
    '/books' : 'Books page',
    '/authors' : 'Authors page',
    '/about' : 'Infos about the project'

}

const server = http.createServer((request, response)=>{
    //define the head of the response:
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.end(routes[request.url])
})

server.listen(port, () => {

    console.log(`server listening on ${port} port | http://localhost:${port}`)


})