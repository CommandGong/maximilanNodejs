const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write("index");
        let rawHTML = '<ul><li>Welcome</li></ul>';
        res.write(rawHTML);
        res.write('</html>');
        res.end();
    }
    if (url === "/users") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write("index");
        let rawHTML = '<ul><li>user1</li></ul>';
        res.write(rawHTML);
        res.write('</html>');
        res.end();
    }

 
    if (url === "/create-user" && method === 'POST') {
        let firstname = "nah";
        let lastname = "nah";


        const body = [];
        req.on('data', (chunk) => {
            //    console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody:", parsedBody);
            firstnamePart = parsedBody.split('&')[0];
            firstname = firstnamePart.split('=')[1];
            lastnamePart  = parsedBody.split('&')[1];
            lastname = lastnamePart.split('=')[1];
            console.log('firstname:' ,firstname)
            console.log('lastname:' ,lastname)
 
        });
        res.statusCode = 302;
    
        return res.end();


    }
    else if (url === "/create-user") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write("index");
        let rawHTML = '   <form action="create-user" method="post">' +
            '<label for="fname">First name:</label><br>' +
            '<input type="text" id="fname" name="fname" value="John"><br>' +
            '<label for="lname">Last name:</label><br>' +
            '<input type="text" id="lname" name="lname" value="Doe"><br><br>' +
            '<input type="submit" value="Submit">' +
            '</form> ';
        res.write(rawHTML);
        res.write('</html>');
        res.end();
    }


});
server.listen(3000);