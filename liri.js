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

var command = process.argv[2]
var query = process.argv[3]

function concertThis(artist) {
    console.log("looking for concerts");
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    //handling a promise
    .then(function(concertResponse){
        for (let index = 0; index < concertResponse.data.length; index++) {
            console.log(concertResponse.data[index].venue.name)
            console.log(concertResponse.data[index].venue.city)
            console.log(concertResponse.data[index].venue.country)
            console.log(concertResponse.data[index].datetime)
            console.log("------------------------------------")
        }
    })
};
function spotifyThisSong(title) {
    if(!title){
        title="The Sign by Ace of Base"
    }
    console.log("searching for songs")
    spotify.search({ type: 'track', query: title }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(data.tracks.items[0].artists[0].name);
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].href);
      console.log(data.tracks.items[0].album.name);
      console.log("------------------------------------")
      });
};
function movieThis(movie) {
    console.log("searching for movies")
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
            console.log(response.data.Title);
            console.log(response.data.Title);
            console.log(response.data.Title);
            console.log(response.data.Title);
            console.log(response.data.Title);
            console.log(response.data.Title);


        })
        
};
function doWhatItSays() {
    console.log("doing what it says")
    fs.readFile("random.txt", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
};

//switch depends on the command passed; multiple outcomes instead of "if" "else", 
// which is better for two outcomes of true and false
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
