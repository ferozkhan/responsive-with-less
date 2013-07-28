
var connect = require('connect');
var PORT = 3001;
var app = connect()
            .use(connect.static(__dirname))
            .listen(PORT);