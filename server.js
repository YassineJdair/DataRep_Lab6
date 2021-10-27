//declaring variable that will not change
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//app.get listens for http request which has get methods
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!!');
})

//app.get listens for http request which has get methods
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//req = request  res = response
//route point that will send some json data
app.get('/api/movies', (req, res) => {
    console.log(req.params.movies);
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    //sends back status code 200 which means everything is okay.
    res.status(200).json({
        mymovies:movies,
        'Message':'Data Sent'
    })
    
})

    app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    })

    app.get('/name', (req, res) => {
        res.send('Hello ' + req.query.FirstName + ' ' + req.query.LastName);
    })

    app.post('/name', (req, res) =>  {
        res.send('GoodBye ' + req.body.FirstName + ' ' + req.body.LastName);
    })


//sets up server to listen to http requests
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})