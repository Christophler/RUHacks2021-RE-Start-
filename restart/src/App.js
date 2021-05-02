import React from "react";
import "./App.css";
import Title from "./components/title";
import Controls from './components/controls';

class App extends React.Component {
	state = {
		color: "blue",
	};

	changeColor = () => {
		if(this.state.color == "blue") {
			this.setState({color: "red"});
		} else {
			this.setState({color: "blue"});
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className={"container-" + this.state.color}>
					<Title />
					<Controls changeColor={this.changeColor}/>
				</div>
			</React.Fragment>
		);
	}
}
export default App;
