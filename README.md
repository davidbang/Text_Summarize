# Text_Summarize

* node.js modules
* Keep your speaker on (especially when you load the app). Also the app will take some time to load as it will need to create the responsive voice.

### Submission was accepted into the program. Was given a spot in the Capital One Software Engineering Summit.

### Installation:

Download Node.js from https://nodejs.org/en/download/ or https://nodejs.org/en/

Download the correct one for your operating system (can use a preexisting installer if one exists)

You may have to restart your computer if Node.js does not work.

All dependencies already downloadable on github.

In case you don't want to download off github, just type in npm install in the terminal when in this directory

Make sure you have npm on your machine. It should have come downloaded with Node.js.

To update npm (optional, don't have to do it).

run

    sudo npm install npm -g

on Mac or Linux

On Windows

You can download a zip file from https://github.com/npm/npm/releases, and unpack it in the node_modules\npm\ folder inside node's installation folder.

To upgrade to npm 2, follow the Windows upgrade instructions in the npm Troubleshooting Guide:

https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows


### Build instructions:

In PATHTO:/Text_Summarize directory.

(if you have not downloaded the dependencies from github, then you can do this command to install the dependencies)

    npm install

(After dependencies are installed)

    node server.js

(opens port 8023, go to 
http://localhost:8023/
to view project)

http://localhost:8023/   

(copy and paste the url or type it into the address bar once the server is running)

Give the server some time to load the responsive voice. Also make sure your speakers and sound are on.


![Alt text](/static/images/Preview1.png?raw=true "Homepage")
Homepage- Responsive Voice AI begins to speak

![Alt text](/static/images/Preview2.png?raw=true "Homepage")
Click on the URL text field

![Alt text](/static/images/Preview3.png?raw=true "Homepage")
After entering a valid url and sentence length, then press Submit.

![Alt text](/static/images/Preview4.png?raw=true "Summarization")
You are then presented with the summarization as well as additional information. Press Back (at the top left) to go back to the homepage.

## MindSumo CapitalOne Explanation


My web application is built using Node.js as its primary backend server. My reasoning behind using Node.js is that it has an abundance of modules that will allow for future improvements to the application to be easily implementable. When you run the server on your local machine (node server.js in the correct directory),  you can then open up the application at http://localhost:8023/ . (Turn on your speakers when you are using the application)

You will see a webpage that asks you to put in a url, as well as the length of the summary that you want, then you press submit. After you press submit and you have entered a valid url (if you have not entered a valid number, it should default to 6), you will be redirected to a new page that presents the summarized content as well as well as additional information about the article. On the backend, my summarizing application queries the Aylien API via jQuery POST request based on the input url given to it. The Aylien API returns a response which I keep track of and then use this response to render my webpage templates. The response consists of the summarized content of the website, as well as several additional additional components such as title, author and publication date of the article. The actual summarization has a limited number of sentences and will provide a general overview of what the article is about. The difficulties in creating this application was learning how to utilize the Aylien API as well as dealing with the asynchronous behavior of AJAX callbacks and API calls that made it so that I had to delay certain operations such that I can receive the necessary data before rendering the rest of my webpage. I have only made it so that the responsive voice AI only tells the person about how to use the website (make sure to keep your speakers on when you load the site).

By using an extensive Aylien API, it allows for easily implementable future improvements to the application by allowing for additional article analysis such as sentiment analysis of phrases and relating phrases. Possible improvements to this application would include allowing for a voice responsive AI such as what I did at https://github.com/davidbang/NutriFit (not this project). This voice AI would be able to take in user commands and then make a POST request to the API based on the user command such as "analyze the topic of the article." I was only able to implement a voice AI that speaks to you, but isn't responsive to your voice such as when you say the url of the website you want to summarize, due to time constraints. Additionally, it is difficult to make an AI responsive to your voice as it requires using a machine learning model to recognize user inputs, which is something I did in my NutriFit project (which I linked above).

You can view the code at

https://github.com/davidbang/Text_Summarize (Final Submission! This is the submission that you should look at)

An additional project that I was working on was the chrome extension version of the text summarization application (available at https://github.com/davidbang/Summarize_Extension)

My Chrome extension queries the Aylien API via jQuery POST request based on the input url given to it. The Aylien API returns a response that is displayed with a Chrome alert. The alert contains the summarized content of the website. The actual summarization has a limited number of sentences and will provide a general overview of what the article is about. The difficulties of this extension was having to learn how to make a chrome extension, which is something I have never attempted to make before this challenge. Additionally, trying to allow for Node.js to work for the chrome extension was also difficult as there is no simple solution to making node work and it required using browserify, uglify, and other node modules as well as grunt to make Node work with chrome extensions. The same reasoning applies for using Node.js for the extensions as it has an abundance of modules that will allow for improvements to the extension to be easily implementable. Additionally it was difficult to make request in the scope of the extension as there would be permission errors as some requests are not able to bypass the contact security policy directive.

If it seems like I may have hit the cap to the aylien api, then the extension may not work properly as the aylien api has a restricted number of queries per time period.
