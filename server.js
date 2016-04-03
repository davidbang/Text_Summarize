var express = require('express');
var app = express();
var http = require("http");
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "80a73a4d",
  application_key: "304653a77829a174564d0e3495c3bb9b"
});

var session = require("express-session");
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var swig = require("swig");
var path = require("path");
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.engine("html", swig.renderFile);
app.engine("js", swig.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname,'/static'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({secret: "secret"}));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

var validUrl = function (req, res, next){
   if (req.session.name){
       next();
    }else{
       res.redirect('/');
  };
};

var finalsentences = "placeholder";

app.get('/', function(req, res){
   
   res.render("index.html");
});


app.post('/home', function(req, res){
    var url = req.body.url;
    var length = req.body.length;
    req.session.name = url;
    req.session.password = length;
    res.redirect('/');
});

app.post('/', function(req, res){
    var url = req.body.url;
    var length = req.body.length;
    req.session.name = url;
    req.session.password = length;
    res.redirect('/home');
});

app.get('/home', validUrl, function(req, res){
  var len = 6;
  if (req.session.password) {
     len = parseInt(req.session.password);
  }
  var sentences = "placeholder2";
  var array = [];
  textapi.summarize({
    url: req.session.name,
    sentences_number: len
  }, function(error, response) {
    if (error === null) {
      response.sentences.forEach(function(s) {
        console.log(s);
        sentences.concat (s);
        
    });
    array = response.sentences;
 
   }
  });
  setTimeout(function() {
  console.log(sentences);
  console.log("theses are final sentences");

  finalsentences = array.toString(); 
  console.log (finalsentences);
  console.log("made it to final sentences");
  res.render("display.html", {username: finalsentences});  
  }, 3000);
});

app.get("/lobby.js", function(req,res){
  var len = 6;
  if (req.session.password) {
     len = parseInt(req.session.password);
  }
  var sentences = "placeholder3";
  textapi.summarize({
    url: req.session.name,
    sentences_number: len
  }, function(error, response) {
    if (error === null) {
      response.sentences.forEach(function(s) {
        console.log(s);
        sentences.concat (s);
    });
   }
  });
  finalsentences = sentences;

    res.render("lobby.js", {username: finalsentences});
});

var lobbyNSP = io.of("/home");

lobbyNSP.on("connection", function(socket){

socket.on("newUser", function(user){
 lobbyNSP.emit("update", finalsentences);  
  socket.emit("update", finalsentences);

});

});

server.listen(8023, function() {
    console.log('Listening on port 8023'); //Listening on port 8888
});
