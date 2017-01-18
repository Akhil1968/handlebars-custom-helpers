var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./routes/routes.js'); 

var app = express();
app.use(express.static(__dirname + "/public"));

//define helper BEGIN
var hbs = exphbs.create({
    defaultLayout:'layout1',
    helpers: {
        mytable: function(data) {
            var str = '<table class="table">';
            for (var i = 0; i < data.length; i++ ) {
                str += '<tr>';
                for (var key in data[i]) {
                str += '<td>' + data[i][key] + '</td>';
                };
                str += '</tr>';
            };
            str += '</table>';
            return str;
        }
    }
});
//define helper END
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', routes.techHandler);
app.get('/place', routes.placeHandler);
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});