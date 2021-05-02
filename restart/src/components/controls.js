import { useState, Fragment } from "react";

import AppTimePicker from "./timepicker";
import RangeSlider from "./rangeslider";

export default function Controls() {
	return (
		<div className="controls">
			<div>
				<button className="big-btn-start">Sleep</button>
				<p>Desired Time to Wake up By:</p>
				<br/>
				<AppTimePicker />
			</div>
			<br />
			<div>
				<button className="big-btn-awake" disabled="y">Awake</button>
				<RangeSlider />
			</div>
		</div>
	);
}
