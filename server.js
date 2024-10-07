//* Step One (In Terminal)
    // npm init -y
        // this creates a package.json
    // npm install express
        // you can also just type `npm i express`
        // this creates node_modules
            // you won't edit anything in the node_modules

//* Step Two (In server.js)
    // require() the express package
    // Type the following boilerplate:

const express = require(`express`)
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

//* Step Three (In server.js)
    // define landing page
    // 'req' and 'res' can be whatever you want
    // Type the following:

app.get(`/`, (req, res) => {
    res.send(`Welcome to my page`)
})

//! It's good to have autosave off here

//* Step Four (In Terminal)
    // npm install nodemon --save-dev

//* Step Five (In package.json)
    // paste the following into the "scripts" object:
    // "dev": "nodemon server.js" 

//* Step Six (In Terminal)
    // npm run dev

//* Step Seven (In server.js)
    // build json object

app.get(`/favorite-dessert`, (req, res) => {
    res.send({
        cookies: `chocolate chip`,
        brownies: `extra fudgy`,
        shortcake: `strawberry`
    })
})

//! To view, go to 'localhost:3001/favorite-dessert'
    // Replace 3001 with your port
    // Replace favorite-dessert with your object

app.get(`/today`, (req, res) => {
    res.send({
        monday: true,
        tuesday: false,
        wednesday: false
    })
})

//! localhost:3001/today

app.get(`/favorite-food`, (req, res) => {
    res.send({
        bagels: `pizza`,
        macaroni: `with cheese`,
        salad: `caesar`
    })
})

app.get(`/favorite-movie`, (req, res) => {
    res.send({
        action: `fury road`,
        horror: `no one will save you`,
        scifi: `sunshine`
    })
})

app.get(`/contact`, (req, res) => {
    res.send({
        cell: `5362`,
        emergency: `1870`,
        address: `11608`,
        email: `prnt`
    })
})

app.get(`/about-me`, (req, res) => {
    res.send({
        bio: `lorem ipsum`,
        interests: `ttrpgs`,
        music: `muse`
    })
})

app.get(`/movies`, (req, res) => {
    res.send({
        movie1: {
            name: `Mad Max: Fury Road`,
            release: `May 15, 2015`,
            runtime: 7200
        },
        movie2: {
            name: `Furiosa: A Mad Max Saga`,
            release: `May 24, 2024`,
            runtime: 8880
        },
        movie3: {
            name: `Mad Max: The Road Warrior`,
            release: `May 21, 1982`,
            runtime: 5640
        }
    })
})

//! If there are two app.get's with the same name, it will
//! hit the first one and go with it, ignoring the second.
//! It's the opposite of CSS. It goes with the first.


app.get(`/message/:id`, (req, res) => {
    console.log(`message id of ${req.params.id}`)
    res.send({
        msg: `id of ${req.params.id}`
    })
})

//It can get more specific

app.get(`/message/:id/:username`, (req, res) => {
    console.log(`message id of ${req.params.id}`)
    res.send({
        msg: `id of ${req.params.id} with username ${req.params.username}`
    })
})

//Queries allow us to have user search and interactivity
// Can use "localhost:3001/find?name=Molly&age=36"

app.get(`/find`, (req, res) => {
    res.send({
        msg: `${req.query.name} is ${req.query.age} years old`
    })
})

// This will catch all other endpoints and give some message
//! * means everything, so anything undefined will be caught
//! by what's below

//! THIS NEEDS TO BE THE LAST PART OF OUR CODE SO IT CATCHES
//! NOTHING ELSE

app.get(`/*`, (req, res) => {
    res.send({
        error: `404 file not found`
    })
})

