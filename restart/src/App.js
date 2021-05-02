import React from "react";
import "./App.css";
import Title from "./components/title";
import TimeDisplay from "./components/timedisplay";
import Controls from './components/controls';

class App extends React.Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<Title />
					<TimeDisplay />
					<Controls/>
					<p>Recommended time to wake up:</p>
				</div>
			</React.Fragment>
		);
	}
}
export default App;
