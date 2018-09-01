const rp = require('request-promise');
const alpha = require('../alphaAdvantageAPI.js')

var stockList = {

} 

/*
[
  {
    "id": "japan",
    "color": "hsl(63, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 59
      },
      {
        "x": "helicopter",
        "y": 84
      },
      {
        "x": "boat",
        "y": 61
      },
      {
        "x": "train",
        "y": 132
      },
      {
        "x": "subway",
        "y": 290
      },
      {
        "x": "bus",
        "y": 23
      },
      {
        "x": "car",
        "y": 241
      },
      {
        "x": "moto",
        "y": 173
      },
      {
        "x": "bicycle",
        "y": 135
      },
      {
        "x": "others",
        "y": 121
      }
    ]

*/


// More syntax on returning a promise: https://stackoverflow.com/questions/36485111/when-i-use-request-promise-in-a-function-and-return-a-value-it-says-undefined
var everyMin = (stockSymbol) => {
  return rp(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${alpha}`)
      .then(function (htmlString) {
      	// convert JSON to an object
          htmlString = JSON.parse(htmlString);
          var apiData = htmlString['Time Series (Daily)']
          var stockData = []
          var count = 1;
          var obj = {
            "id": stockSymbol,
            "color": "hsl(63, 70%, 50%)",
            "data": stockData
          }
          
          for(var prop in apiData){
            var data = {
              "x": prop.slice(5),
              "y": apiData[prop]['4. close']
            }
            stockData.push(data)
          }

         return ([obj])
      })
      .catch(function (err) {
          console.log('error getting data')
      });

}


module.exports = {
  everyMin
}