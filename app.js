const http  = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const cssFile = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const browserApp = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) =>{
    if (req.url == '/'){
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(homePage)
        }
    if (req.url == '/styles.css'){
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(cssFile)
        }
    if (req.url == '/logo.svg'){
            res.writeHead(200,{'content-type': 'image/svg+xml'});
            res.end(logo)
        }
    if (req.url == '/browser-app.js'){
            res.writeHead(200,{'content-type': 'text/javascript'});
            res.end(browserApp)
        }
    if (req.url == '/about'){
            res.writeHead(200,{'content-type': 'text/html'});
            res.end('<h1> This is the about page </h1>')
        }
    if (req.url == '/contact'){
        res.writeHead(200,{'content-type': 'text/html'});
        res.end('<h1> This is the contact page </h1>')
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.end()
    }
})

server.listen(5000)