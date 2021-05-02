import React from "react";
import "./App.css";
import Title from "./components/title";
import Controls from './components/controls';

class App extends React.Component {
	state = {
		color: "blue",
	};

	setColor(color) {
		this.setState({color: color});
	}

	changeColor = (page) => {
		if(page === "start") {
			this.setColor("blue");
		} else if(page === "awake") {
			this.setColor("red");
		} else if(page === "end") {
			this.setColor("orange");
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
