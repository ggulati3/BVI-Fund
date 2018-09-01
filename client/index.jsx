import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './Components/graph.jsx'
import StockChoice from './Components/StockChoice.jsx'
class Index extends React.Component  {
  constructor(props){
  	super(props)
  	this.state = {
  		stock: 'INX'
  	}
  }



  render(){
  	return(
  		<div>
	  		<h1>BVI Fund Tracker</h1>
	  		<StockChoice stock = {this.state.stock}></StockChoice>
	  		<Graph></Graph>
  		</div>
  	)
  }

}

ReactDOM.render(<Index />, document.getElementById('root'))