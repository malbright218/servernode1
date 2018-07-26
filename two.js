var http = require("http");

var PORT1 = 7000;   //good
var PORT2 = 7500;   //bad
////////////////////////////////////////////////////////////////////////////////////
/*
# **Instructions**

* Using the previous example as a guide, create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.
* Make sure you create a Github repo and commit this code!

**Bonus**

* Look for other ways to expand what your server can do. As possibilities:
  * Generate the good/bad phrase randomly from a list of predefined phrases
  * Use the `twitter` package inside the response to also return a random tweet
////////////////////////////////////////////////////////////////////////////////////*/
/////////////////////////BAD////////////////////////////////////////////////////////
function handleBad(request, response) {
    response.end("You suck!" + request.url);
};
var badserver = http.createServer(handleBad);
badserver.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
});
/////////////////////////GOOD///////////////////////////////////////////////////////
function handleGood(request, response) {
    response.end("I guess you\'re all right." + request.url);
};
var goodserver = http.createServer(handleGood);
goodserver.listen(PORT1, function() {
    console.log("Server listening on : http://localhost:" + PORT1);
});
////////////////////////////////////////////////////////////////////////////////////