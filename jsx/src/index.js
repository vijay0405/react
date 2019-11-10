// import react and react dom

import React from 'react';
import ReactDom from 'react-dom';

// create react component

const App = () => {
	return (
		<div>
		<label htmlFor="name" className ="label">Enter Name:</label>
		<input id="name" type="text"/>
		<button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
		</div>
		);
}


// take react component and show it on screen

ReactDom.render(
	<App />,
	document.querySelector('#root')
);