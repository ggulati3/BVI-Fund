import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Components/graph.jsx'
import StockChoice from './Components/StockChoice.jsx'
import axios from 'axios'

class Index extends React.Component  {
  constructor(props){
  	super(props)
  	this.state = {
  		stock: 'INX',
  		data: null
  	}

  	this.getStockData = this.getStockData.bind(this)
  }

  getStockData(stock){
  	if(stock){
  		this.state.stock = stock
  	}
  	var that = this;
  	axios.get('/stockData').then(function(data){
  		console.log(data.data)
  		that.setState({data: data.data})
  	})
  }

  componentDidMount(){
  	this.getStockData();
  }

  render(){
  	return(
  		<div>
	  		<h1>BVI Fund Tracker</h1>
	  		<StockChoice stock = {this.state.stock}></StockChoice>
	  		<Graph stock = {this.state.stock} data = {this.state.data}></Graph>
  		</div>
  	)
  }

}

ReactDOM.render(<Index />, document.getElementById('root'))