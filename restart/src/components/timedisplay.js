import { Component, Fragment } from "react";

class TimeDisplay extends Component {
	state = {
		date: "",
		time: "",
	};
	componentDidMount() { // runs when component is mounted
		setInterval(() => {
			var date = new Date();
			this.setState({
				time: date.toLocaleTimeString(),
				date: date.toDateString(),
			});
		}, 500);
	}
	render() {
		return (
			<Fragment>
				<div className="display">
					<p>{this.state.date}</p>
					<p>Currently: {this.state.time}</p>
				</div>
			</Fragment>
		);
	}
}

export default TimeDisplay;
