CmdUtils.CreateCommand({
  name: "lmgtfy",
  synonyms: ["letmegooglethatforyou"],
  takes: {"words to google": noun_arb_text},
  icon: "http://letmegooglethatforyou.com/favicon.ico",
  description: "Replaces the selected words with a <a href=\"http://www.tinyurl.com\">TinyUrl</a> of the <a href=\"\">Let Me Google That For You</a> link",
  preview: function( pblock, urlToShorten ){
    pblock.innerHTML = "Replaces the selected URL with a tiny LMGTFY url.";
    var baseUrl = "http://tinyurl.com/api-create.php?url=http://letmegooglethatforyou.com/?q=";
    pblock.innerHTML = "Replaces the selected URL with ",
    jQuery.get( baseUrl + urlencode(urlToShorten.text), function( tinyUrl ) {
      if(tinyUrl != "Error") pblock.innerHTML += tinyUrl;
    });
  },
  execute: function( urlToShorten ) {
    //escaping urlToShorten will not create the right tinyurl
    var baseUrl = "http://tinyurl.com/api-create.php?url=http://letmegooglethatforyou.com/?q=";
    jQuery.get( baseUrl + urlencode(urlToShorten.text), function( tinyUrl ) {
      CmdUtils.setSelection( tinyUrl );
    });
  }
});

function urlencode(str) {
  str = escape(str);
  str = str.replace('+', '%2B');
  str = str.replace('%20', '+');
  str = str.replace('*', '%2A');
  str = str.replace('/', '%2F');
  str = str.replace('@', '%40');
  return str;
}

