import { bot } from '././core';
import queryHandler from './handler/queryHandler'
import botCommand from './handler/botCommand'
import msgHandler from './handler/msgHandler'

// setting up the message handler
bot.on('message', (message) => { msgHandler.process(message) });
// set up the asynchronous callback handler
bot.on('callback_query', (query) => { queryHandler.process(query) });
// setting error handler
bot.on('polling_error', (error) => { throw error; });
console.log("Bot is running...");
// listen 
const http = require('http')
const port = 8080
// request handler
const requestHandler = (request, response) => {
    response.writeHead(200, {
        'access-control-allow-headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With',
        'access-control-allow-methods': 'POST, GET',
        'access-control-allow-origin': '*',
        'content-type': 'text/html; charset=utf-8',
    });
    let response_content = JSON.stringify({ message: "Hello, world!" });
    response.end(response_content);
}
// create the http server
const server = http.createServer(requestHandler)
// start the http server
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
// bot test case
if (process.env.BOT_ENV == 'test') {
    setTimeout(() => {
        console.log('Exiting automatically...');
        process.exit(0);
    }, 3000)
}