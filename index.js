const cookieParser=require('cookie-parser');
const express=require('express');
const db=require('./config/mongoose');
const User=require('./models/users');
const app=express();
const port=3000;


app.use(cookieParser());
app.use(express.urlencoded());

app.use('/',require('./routes/index'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));







app.listen(port,function(err){
    if(err){
        console.log('error running server');
    }
    console.log('Server is running at port ',port);
})