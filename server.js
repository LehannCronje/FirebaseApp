var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');

var serviceAccount = require('./node-firebase-bb80a-firebase-adminsdk-a3r0j-7c9e92c5d4');

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://node-firebase-bb80a.firebaseio.com'
});

require('dotenv').config();

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

//Create authentication middleware
function isAuthenticated(req, res, next){
    // check is user logged in
    //if the are, attach the user to the request object and call next
    //if they are not, send them to the login page
    //with a message saying "login!"
};

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/homecomming-queen', isAuthenticated, (res,req) =>{
    res.render('homecomingQueen');
});

app.post('/',(req,res) => {

})
var port = process.env.PORT || 3000;

app.listen(port ,() => {
    console.log('the server is running on port ' + port);
});;