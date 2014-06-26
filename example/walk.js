var walker = require('../lib/walker.js');
var timers = require("timers");
walker.walk(process.argv[2], process.argv[3], function(location, done) {
    console.log('do stuff %s', JSON.stringify(location));
    //You should use timers.setImmediate because otherwise,
    //the stack traces can get extremely long.
    timers.setImmediate(done());
}, function(e) {
    if(e) {
        console.log(e);
    }

    process.exit(0);
});
