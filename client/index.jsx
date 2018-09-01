import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component  {
  constructor(props){
  	super(props)
  }

  render(){
  	return(
  		<h1>BVI Fund Tracker</h1>
  	)
  }

}

ReactDOM.render(<Index />, document.getElementById('root'))