const express = require('express');
const app = express();

app.get('/home', (req, res, next) => {
    next();
});
app.get('/see-our-chickens', (req, res, next) => {
    next();
});
app.get('/see-our-eggs', (req, res, next) => {
    next();
});


///// MIDDLEWARE /////
// app.use(express.static(__dirname + '/public', { extensions: 'html' }));
app.use('/home', (req, res, next) => {
    res.sendFile('public/home.html', {
        root: __dirname
    });
});
app.use('/see-our-chickens', (req, res, next) => {
    res.sendFile('public/see-our-chickens.html', {
        root: __dirname
    });
});
app.use('/see-our-eggs', (req, res, next) => {
    // console.log('        ,ggadddd8888888bbbbaaa,_ ' );
    // console.log('     ,ad888,      `Y88,      `Y888baa,' );
    // console.log('   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,' );
    // console.log('  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,' );
    // console.log(' ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,' );
    // console.log(""`,P'"Y88b,        "Y88b,        `"Y8ba,_      `Ya,`" );
    // res.sendFile('egg.txt', {root: __dirname});
    console.log();
    res.sendFile('public/see-our-eggs.html', {
        root: __dirname
    });
});

// PORT AND LISTENING
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

