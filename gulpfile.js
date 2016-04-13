
var gulp = require('gulp');

var express = require('express');
var app = express();
var EXPRESS_ROOT = __dirname;
var EXPRESS_PORT = 9000;
var APICONFIG = './async.api.js';


gulp.task('server:express', function() {
    startExpress();
});
// express服务器
function startExpress() {
    var bodyParser = require('body-parser');
    app.use(require('connect-livereload')());
    app.use(express.static(EXPRESS_ROOT));
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    var apis = require(APICONFIG);
    for(var key in apis) {
        var method = key.split(/\s+/)[0].toLowerCase(),
            url = key.split(/\s+/)[1];

        app[method](url, apis[key]);
    }

    var server = app.listen(EXPRESS_PORT, function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log('async server listening at http://%s:%s', host, port)
    });
}
gulp.task('default', ['server:express']);
