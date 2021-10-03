const express = require('express')
const app = express();

const bodyParser = require('body-parser');

const mysql = require('mysql');

const handlebars = require('express-handlebars');

const urlencodeParser = bodyParser.urlencoded({ extended: false });

require('dotenv').config();

const userRouter = require('./routes/routes')



//Template engine
app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/util', express.static('util'));
app.use('/img', express.static('img'));
app.use('/', userRouter)



let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server running')
})