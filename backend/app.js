var express = require('express');
var mongoose = require('mongoose');
var schemas = require('./models/schemas');
var cors = require('cors')
var app = express();
app.use(cors())
var mongoDB = "mongodb+srv://pschulz2:Mee2can!!!@cluster0.w5jt1.mongodb.net/testdb1?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log("h");
  });

app.get('/test', (req, res) => {
    res.send("hi there");
});

app.post('/testPost', (req, res) => {
    var person1 = new schemas.Person({name: "Paige"});
    var meeting1 = new schemas.Meeting({name: "meeting1", date: Date.now, 
    timestart: Date.now, 
    timeend: Date.now, timestoAvoid:[Date.now], people: [person1]});
    var poll1 = new schemas.Poll({name: "Poll1", meetings: [meeting1]});
    person1.save();
    meeting1.save();
    poll1.save();
    console.log(poll1.meetings);
    res.send("reached this route");
})

app.listen(8000, console.log("server be up and runnin"));