// Liri takes the following arguements:
// *concert-this
// *spotify-this-song
// *movie-this
// *do-what-it-says

// Commands to run LIRI
// node liri.js concert-this <artist/band name here>
// node liri.js spotify-this-song '<song name here>'
// node liri.js movie-this '<movie name here>'
// node liri.js do-what-it-says

//process argv is always an array, [0],[1], always reserved by node and the file you are running with node

require("dotenv").config();

// these add other programs to this one
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");


var command = process.argv[2]
var query = process.argv[3]

function concertThis(artist) {
    console.log("------------------------------------");
    console.log("Looking for concerts...");
    console.log("------------------------------------");

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    //handling a promise
    .then(function(concertResponse){
        for (let index = 0; index < concertResponse.data.length; index++) {
            
            console.log("Venue Name: " + concertResponse.data[index].venue.name);
            console.log("Venue Location: " + concertResponse.data[index].venue.city);
            console.log("Venue Country: " + concertResponse.data[index].venue.country);
            var date = concertResponse.data[index].datetime;
            var timeFormat = moment(date).format('MM/DD/YYYY');
            console.log("Venue Date: " + timeFormat);
            console.log("------------------------------------");
        };
    });
};
function spotifyThisSong(title) {
    if(!title) {
        title="The Sign";
    }
    console.log("------------------------------------");
    console.log("Searching for songs...")
    console.log("------------------------------------");
    spotify.search({ type: 'track', query: title }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        };         
        var songArr = data.tracks.items
        for (let index = 0; index < songArr.length; index++) { 
            console.log("Artist(s): " + songArr[index].artists[0].name);
            console.log("Song title: " + songArr[index].name);
            console.log("Spotify preview link: " + songArr[index].href);
            console.log("Album: " + songArr[index].album.name);
            console.log("------------------------------------");
        }
      });
};
function movieThis(movie) {
    if(!movie){
        movie="Mr. Nobody"
    };
    console.log("------------------------------------");
    console.log("Searching for movies...");
    console.log("------------------------------------");
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country of production: " + response.data.Country);
            console.log("Movie Language: " + response.data.Language);
            console.log("Movie Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("------------------------------------");

        });
        
};
function doWhatItSays() {
    console.log("------------------------------------");
    console.log("Doing what it says...");
    console.log("------------------------------------");
    fs.readFile("random.txt", 'utf8', function(err, data) {
        console.log(data);
        var dataArr = data.split(',');
        console.log(dataArr[0])
       
            chooseCommand(dataArr[0], dataArr[1]);  
      });
};

//switch depends on the command passed; multiple outcomes instead of "if" "else", 
// which is better for two outcomes of true and false
function chooseCommand(command, query) {
    switch(command) {
        case "concert-this":
            concertThis(query)
            break
            case "spotify-this-song":
            spotifyThisSong(query)
            break
            case "movie-this":
            movieThis(query)
            break
            case "do-what-it-says":
            doWhatItSays(command)
            break
    };
}

chooseCommand(command, query)
