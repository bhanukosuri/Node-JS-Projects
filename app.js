const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = req.url
    if (url === '/') {
        res.write('<html>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>')
        res.end()
    } else if (url === '/home'.toLowerCase()) {
        res.write('<html>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        res.end()
    } else if (url === '/about'.toLowerCase()) {
        res.write('<html>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        res.end()
    } else if (url === '/node'.toLowerCase()) {
        res.write('<html>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(4000)
