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
    const date = new Date();
console.log(`
You found the Easter Egg at ${date}
     ,ggadddd8888888bbbbaaa,_ 
    ,ad888,      'Y88,      'Y888baa,
  ,dP"  "Y8b,      '"Y8b,      '"Y8888ba,
 ,88      "Y88b,      '"Y8ba,       '"Y88Ya,
,P88b,      '"Y88b,       '"Y8ba,_       ""8a,
,P'"Y88b,        "Y88b,        '"Y8ba,_      'Ya,
8'    "Y88b,        ""Y8ba,         ""Y8ba,_   '8,
8b       "Y88b,         ""Y8ba,_         ""Y88baaY
88b,        "Y88ba,         ""Y88ba,_         '""P
8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
'b,"Y88ba,         ""Y88baa,_         """Y888bd"
'b, '"Y88ba,_         ""Y888baa,_         ,8"
 '8,   '""Y88ba,_         '"""Y8888baaaaaP"
  'Ya,     '""Y888ba,_           '"d88P"
    '"Yb,,_     '""Y888baa,__,,adP""'
        '"""YYYY8888888PPPP"""'
        `);
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

