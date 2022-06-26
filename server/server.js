const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res)=>{
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({

        redirectUri: 'http://localhost:3000',
        clientId: '980e39afc95a4d9893d3e4acb62e24e0',
        clientSecret: '28ba2ddb0de94c5e8b3544a6fe75480b'

    }) 

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({

        })
    })
});