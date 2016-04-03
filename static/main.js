sayThings = function(){
    say("Hello and Welcome to David's Text Summarizing Application. Enter a valid Url, the number of sentences you want the summarization to be, and then press submit!");
}

say = function(speech) {
    responsiveVoice.speak(speech, "US English Female");
}

$(document).ready(function(){
   setTimeout(sayThings, 500);
});

