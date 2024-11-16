const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


// app.get('/hello(.html)?', (req, res, next) => {
//     console.log('trying to access the html file');
//     next();
// }, (req, res) => {
//     res.send('every body move ur body')
// })




app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html')

    //status code 301 permantely redirect to the new url file
    //status code 302 temporily redirect the the new url file
    //status code 304 not modified
    // by default is express js the  redirection code would be 302
    // so we need to explicitily mark that one as 301

})


app.get('/*', (req, res) => {
    res.status(404)
    sendFile(path.join(__dirname, 'views', '404.html'))
})





app.get('^/$|/index(.html)?', (req, res) => {
    // this means in regular expression anything starts from /somedata and ends with slash somedata/
    // res.send('welcome to the Express Js')
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})



app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));