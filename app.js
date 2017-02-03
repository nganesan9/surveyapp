var express = require('express');
var cfenv = require('cfenv');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

//Code to create add cloudant service
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
var dbCredentials = {
	dbName : 'surveyanswers'
};
var db;
if(process.env.VCAP_SERVICES) {
	services = JSON.parse(process.env.VCAP_SERVICES);	
	if(services.cloudantNoSQLDB) {
		dbCredentials.url = services.cloudantNoSQLDB[0].credentials.url;
	}
	console.log('VCAP Services: '+JSON.stringify(process.env.VCAP_SERVICES));
	
	host = process.env.VCAP_APP_HOST; 
	port = process.env.VCAP_APP_PORT;
	console.log("app is in bluemix");
}
//Load nano Module to interface with cloudant
//var nano = require('nano')(dbCredentials.url);
var nano = require('nano')("https://f69bd6d1-bf42-43db-8a1f-822f06e0e954-bluemix:0409af40c352e41c849e648f2360a1139ae966e61e940b1375dc184058147d93@f69bd6d1-bf42-43db-8a1f-822f06e0e954-bluemix.cloudant.com");	
//Create database
/*
	nano.db.create(dbCredentials.dbName, function (err, res) {
		if (err) {
			console.log('could not create db');
		    console.log("ERROR:" , err);
		    console.log("RES:" , res);
		}
		else
		{
			console.log("created db");
		}
	});
*/    
//Creating a variable that points to the proper database
db = nano.use(dbCredentials.dbName);

app.get('/abc', function(req, res){
	
	//READ from DB, sort, create JSON, send to backend...
	var password = '0409af40c352e41c849e648f2360a1139ae966e61e940b1375dc184058147d93';
	var username = 'f69bd6d1-bf42-43db-8a1f-822f06e0e954-bluemix';	
	var url="https://"+username+":"+password+"@f69bd6d1-bf42-43db-8a1f-822f06e0e954-bluemix.cloudant.com/city_actions/_design/city_actions/_view/city_actions";
	
	request({
			 url: url,
			 json: true
			}, function (error, response, body) {	
		if (!error && response.statusCode === 200)
		{
			//Check if current input is present in the table, else add. If present then return with error message
			var user_data = body.rows;
			var city_present = 0; //false
			var list_of_cities = '[';
			var city_name_array = [];
			
			for(var i=0; i< user_data.length; i++)
				city_name_array.push(user_data[i].value);
			city_name_array.sort();			
			for(var i=0; i<city_name_array.length; i++)
			{
				var city_JSON = '{\"city\":\"' + city_name_array[i] + '\"}';
				if(i == 0)
					list_of_cities = list_of_cities.concat(city_JSON);
				else
				{
					list_of_cities = list_of_cities.concat(",");
					list_of_cities = list_of_cities.concat(city_JSON);
				}
			}

			console.log("List of cities : " + city_name_array);
			list_of_cities = list_of_cities.concat("]");
			console.log(list_of_cities);
			res.contentType('application/json');
			res.send(JSON.parse(list_of_cities));
		}
		else
		{
			console.log("No data from URL");
			console.log("Response is : " + response.statusCode);
			var name_string="{\"added\":\"DB read error\"}";
			res.contentType('application/json');
			res.send(JSON.parse(name_string));
		}
	});	
});

app.get('/send_to_cloudant', function(req, res){
    
      console.log('************************************ Received form data *********************************************************');
      console.log(" req.query  = " + req.query);
      console.log("JSON.stringify(req.body) = " + JSON.stringify(req.body));
      console.log("JSON.stringify(req.query) = " + JSON.stringify(req.query));
      //Add to DB
      db.insert(req.query, /* @callback */ function(err, body, header){
        if (!err) {
            console.log("Added new JSON String");
            }
        else {
            console.log("Error inserting into DB " + err);    
        }
      });
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
	  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
	  res.setHeader("Expires", "0"); // Proxies.
      res.sendFile(path.join(__dirname + '/public/thankyou.html'));
      //res.redirect('/public/thankyou.html');

      
});
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, appEnv.bind, function() {
  console.log("server starting on " + appEnv.url);
});
