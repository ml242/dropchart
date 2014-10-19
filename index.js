var redis = require("redis"),
    client = redis.createClient();
 
client.on("error", function (err) {
    console.log("Error " + err);
});
 
client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});



// #!/usr/bin/env node

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// error handling function...still don't understand this one
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, "An error has occurred.  My bad.");
});

var server = app.listen(process.env.PORT || 8100, function() {
    console.log("Application listening on %d", server.address().port);
});


