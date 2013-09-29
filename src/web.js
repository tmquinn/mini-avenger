/**
 * Created by quinn on 9/26/13.
 */
var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/', restify.serveStatic({
    directory: './html',
    default: 'index.html'
}))

server.get('/foo', function (res))

server.listen(process.env.PORT || 8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});