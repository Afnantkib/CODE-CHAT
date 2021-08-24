const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/code_chat');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error db'));

db.once('open',function(){
    console.log('Successfully connected to the db');
    
});
