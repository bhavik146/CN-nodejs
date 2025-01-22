// Create a server using nodejs

//  1. Import http library/module

const http = require("http");

// 2. Create server

const server = http.createServer((request,response)=>{
    console.log(request.url);

    response.write("welcome to the server ");

    if(request.url == '/product'){
        // response ends
        return response.end("This is product page");
    }
    else if(request.url == '/user'){
        return response.end("This is user page");
    }
    // modifying response
    response.end("Welcome to NodeJS Ninja server");
});

// 3. Specify a port to listen to client requests

server.listen(3100, ()=>{
    console.log("Server is listening on port 3100");
});

// console.log("Server is listening on port 3100");


// https://github.com/bhavik146/CN-nodejs.git