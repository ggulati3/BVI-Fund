const rp = require('request-promise');
const alpha = require('../alphaAdvantageAPI.js')

var stockList = {

} 


// More syntax on returning a promise: https://stackoverflow.com/questions/36485111/when-i-use-request-promise-in-a-function-and-return-a-value-it-says-undefined
var everyMin = (stockSymbol) => {
  return rp(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=${alpha}`)
      .then(function (htmlString) {
      	// convert JSON to an object
          htmlString = JSON.parse(htmlString);

          var apiData = htmlString['Time Series (1min)']
          var stockData = {}
          for(var prop in apiData){
          	stockData[prop] = apiData[prop]['4. close']
          }
          return stockData;
      })
      .catch(function (err) {
          console.log('error getting data')
      });

}


module.exports = {
  everyMin
}