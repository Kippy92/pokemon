console.log("inside of server.js");
const express = require("express"),
    app = express(),
    bp = require('body-parser'),
    port = 8000;

app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})