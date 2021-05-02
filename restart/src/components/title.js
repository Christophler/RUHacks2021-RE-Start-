import { Component, Fragment } from "react";
import TimeDisplay from './timedisplay';

class Title extends Component {
	render() {
		return (
			<Fragment>
				<div className="center-title">RE:START</div>
				<div className="center-desc">Your 90 Minute Sleep Cycle Clock</div>
				<TimeDisplay/>
				<hr />
			</Fragment>
		);
	}
}

export default Title;
