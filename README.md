# liri-node-app

Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development

LIRI bot

LIRI stands for Language Interpretation and Recognition Interface. LIRI bot is a command line node app that takes in parameters and returns data.

NPM Dependencies
dotenv
node-spotify-api
axios
fs
moment

API Integration
Bands in Town
Spotify
OMDB
Usage

The following commands run without user input:
$ node liri.js concert-this
$ node liri.js spotify-this-song
$ node liri.js movie-this
$ node liri.js do-what-it-says

These commands accept user input:
$ node liri.js spotify-this-song 'ring of fire'
$ node liri.js movie-this 'interstellar'