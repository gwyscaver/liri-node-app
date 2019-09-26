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
// var spotify = new Spotify(keys.spotify);
var axios = require("axios");

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
function spotifyThisSong() {
    console.log("searching for songs")
};
function movieThis() {
    console.log("searching for movies")
};
function doWhatItSays() {
    console.log("doing what it says")
};

//switch depends on the command passed; multiple outcomes instead of "if" "else", 
// which is better for two outcomes of true and false
switch(command) {
    case "concert-this":
        concertThis(query)
        break
        case "spotify-this-song":
        spotifyThisSong()
        break
        case "movie-this":
        movieThis()
        break
        case "do-what-it-says":
        doWhatItSays()
        break
};
