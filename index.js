/* jsint node:true */
var express = require('express');
var srcds = require('srcds-info');
var http = require('http');
var path = require('path');
var app = express();

var YOUR_SERVER_IP_HERE = 'srcds.nickpelone.com';
var client = srcds(YOUR_SERVER_IP_HERE, 27015);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
    console.log("Express app up on port 3000");
});

app.get("/servers.json", function(request, response) {
    client.info(function (error, info) {
        if(error) {
            console.log(error);
        } else {
            response.json(info);
            console.log(info);
            client.close();
            client = srcds(YOUR_SERVER_IP_HERE, 27015);
        }
    });
});

