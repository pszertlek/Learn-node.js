var events = require("events");


var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on('some_event',function() {
    console.log('some_event 触发');
}

);
