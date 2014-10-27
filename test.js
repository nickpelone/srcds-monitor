var srcds = require('srcds-info');

client = srcds('54.165.223.249', 27015);

client.info(function(err, info) {
    if (err) {
            console.error(err)
    }
    else {
        console.log(info);
    }
    client.close();
});
