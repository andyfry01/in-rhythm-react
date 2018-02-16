const request = require('request')
request(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.lastFmApiKey}&format=json&limit=100`, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    let apiResponse = JSON.parse(res.body)
    let desiredInfo = apiResponse.artists.artist.map( artistInfo => {
      return {aristName: artistInfo.name, picture: artistInfo.image[artistInfo.image.length - 1]['#text']}
    })
    console.log(desiredInfo);
  }
})