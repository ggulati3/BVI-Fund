const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const getStockData = require('./getStockData.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	getStockData.everyMin('TWLO').then(function(data){
		res.send(JSON.stringify(data))
	})	
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});