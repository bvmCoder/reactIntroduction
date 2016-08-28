var express = require('express');

// create our app

var app = express();
// we need to use Public Folder
app.use(express.static('public'));

app.listen(3000, function(){
   console.log('Express Server is up on port 3000');
});

