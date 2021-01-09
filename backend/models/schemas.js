var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var personschema = new Schema(
    {
        name: {type: String, required: true, max: 100},
    }
);



var meetingschema = new Schema(
    {
        name: {type: String},
        date:  {type: Date},
        timeStart: {type: Date},
        timeEnd: {type: Date}, 
        timesToAvoid: [Date],
        people: [personschema]
    }
);

var pollschema = new Schema(
    {
        name: {type: String, required: true, max: 20},
        meetings: [meetingschema]
    }
);

var Person = mongoose.model('Person',personschema);
var Meeting = mongoose.model('Meeting',meetingschema);
var Poll = mongoose.model('Poll', pollschema);
module.exports = { Meeting, Person, Poll };