import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component {
	state = {lat:null, errorMessage:''};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(pos)=>{
				this.setState({lat: pos.coords.latitude});
			},
			(err)=>{
				this.setState({errorMessage: err.message})
			}
		);
	}

	render() {
		if(this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}

		if(!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}/>
		}

		if(!this.state.errorMessage && !this.state.lat) {
			return <Spinner message="Please give required permissions."/>
		}
	}
}

ReactDom.render(
	<App/>, document.querySelector("#root")
	);