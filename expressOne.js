var http = require("http");
var PORTone = 7000;
var PORTtwo = 7500;
function handleRequestOne (request,response){
	response.end ("You r so freaking awesome at JS!! Path Hit: " + request.url);
}
function handleRequestTwo (request,response){
	response.end ("You r not so freaking awesome at JS!! Path Hit: " + request.url);
}
var server = http.createServer (handleRequestOne);
server.listen (PORTone,function(){
	console.log ("localhost:7000");
});
var server = http.createServer (handleRequestTwo);
server.listen (PORTtwo,function(){
	console.log ("localhost:7500");
});