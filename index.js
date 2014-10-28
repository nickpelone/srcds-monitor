/* jsint node:true */
var express = require('express');
var srcds = require('srcds-info');
var http = require('http');
var path = require('path');
var app = express();

var YOUR_SERVER_IP_HERE = 'srcds.nickpelone.com';
var client1 = srcds(YOUR_SERVER_IP_HERE, 27015);
var client2 = srcds(YOUR_SERVER_IP_HERE, 27016);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, function() {
    console.log("Express app up on port 80");
    //drop priviledges after running on port 80
    var uid = parseInt(process.env.SUDO_UID);
    if(uid) process.setuid(uid);
    console.log('Server\'s UID is now ' + process.getuid());

});

app.get("/server1.json", function(request, response) {
    client1.info(function (error, info) {
        if(error) {
            console.log(error);
        } else {
            response.json(info);
            console.log(info);
            client1.close();
            client1 = srcds(YOUR_SERVER_IP_HERE, 27015);
        }
    });
});
app.get("/server2.json", function(request, response) {
    client2.info(function (error, info) {
        if(error) {
            console.log(error);
        } else {
            response.json(info);
            console.log(info);
            client2.close();
            client2 = srcds(YOUR_SERVER_IP_HERE, 27016);
        }
    });
});

