import React from "react";
import "./App.css";
import Title from "./components/title";
import TimeDisplay from "./components/timedisplay";
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
					<TimeDisplay />
					<Controls changeColor={this.changeColor}/>
					<p>Recommended time to wake up:</p>
				</div>
			</React.Fragment>
		);
	}
}
export default App;
