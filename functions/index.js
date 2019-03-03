const functions = require('firebase-functions');

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
require('dotenv').config();

var serviceAccount = require('./node-firebase-bb80a-firebase-adminsdk-a3r0j-7c9e92c5d4');

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://node-firebase-bb80a.firebaseio.com'
});

var database = firebaseAdmin.database();

//Create instance of express app
var app = express();

//We want to serve js and html in ejs
//ejs stands for embedded javascript
app.set('view engine', 'ejs');

// we also want to send css and images, ect and other static files
app.use(express.static('views'));
app.set('views', __dirname + '/views');

//will give server access to user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use(logger('dev'));


app.get('/', (req, res) => {
    var resturantsRef = database.ref("/Resturants");
    
    resturantsRef.once('value', (data) =>{
        var restData = data.val();
        if(!restData){
            restData = {};
        }
        res.render('home', {resturants: restData});
    });

});


exports.app = functions.https.onRequest(app);