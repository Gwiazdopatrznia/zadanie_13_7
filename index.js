var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err, files) {
    console.log('Dane przed zapisem:'.yellow);
    console.log(files.toString());
    fs.writeFile('new.txt', files.toString(), function(err) {
        if (err) throw err;
        console.log('Zapisano do pliku new.txt.'.green);
    });
});
