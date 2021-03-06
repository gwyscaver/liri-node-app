# LIRI - A Node App via Command Line

LIRI stands for Language Interpretation and Recognition Interface. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

[GitHub Link](https://github.com/gwyscaver/liri-node-app)

[Video Playback](https://drive.google.com/file/d/154aH6bM4usVApHeI4A9z0D3I6BI-1_SG/view?usp=sharing)

![Video Tutorial](assets/images/video.jpg)



# Usage
1. Clone repo
2. npm install
3. cd liri-node-app
4. Please see notes below to run the app
5. ENJOY!

# Tech Used
* NPM Dependencies
    * dotenv
    * node-spotify-api
    * axios
    * fs
    * moment
* API Integration
    * Bands in Town
    * Spotify
    * OMDB

# Notes

## The following commands run without user input:
    $ node liri.js concert-this
    $ node liri.js spotify-this-song
    $ node liri.js movie-this
    $ node liri.js do-what-it-says

## These commands accept user input:
    $ node liri.js spotify-this-song "ring of fire"
    $ node liri.js movie-this "interstellar"

## What Each Command Should Do

node liri.js concert-this `<upcoming concert name here>`
* This will show the following information about the concerts in your terminal/bash window:
* Venue Name: 
* Venue Location: 
* Venue Country: 
* Venue Date: 07/01/2020 (corrected format)

node liri.js spotify-this-song `<song name here>`
* This will show the following information about the song in your terminal/bash window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* if no song is provided then your program will default to
* "The Sign" by Ace of Base

node liri.js movie-this `<movie name here>`
* This will output the following information to your terminal/bash window:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* Rotten Tomatoes Rating.
* Rotten Tomatoes URL.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
* It's on Netflix!

node liri.js do-what-it-says
* This uses the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

