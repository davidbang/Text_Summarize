var socket = io("localhost:8023/home");
var username = "{{username}}";
socket.emit("newUser", username);

var lobbyTable = $("#lobbyTable");
socket.on("update", function(sentences){
    lobbyTable.html("");
    lobbyTable.append(sentences);
    console.log(sentences);
});

