import { useState, Fragment } from "react";

import AppTimePicker from "./timepicker";
import RangeSlider from "./rangeslider";
export default function Controls(props) {
	const [startDisabled, setStartDisabled] = useState("");
	const [awakeDisabled, setAwakeDisabled] = useState("y");
	const [happinessDisabled, setHappinessDisabled] = useState("y");
	const [timeDisabled, setTimeDisabled] = useState("");

	function startClick() {
		setAwakeDisabled("");
		setStartDisabled("Y");
		setHappinessDisabled("");
		setTimeDisabled("Y");
		props.changeColor();	
	}

	function awakeClick() {
		setAwakeDisabled("Y");
		setStartDisabled("");
		setHappinessDisabled("y");
		setTimeDisabled("");
		props.changeColor();
	}

	return (
		<div className="controls">
			<div className="control">
				<button
					className="big-btn-start"
					disabled={startDisabled}
					onClick={startClick}
				>
					Start
				</button>
				<p>Desired Time to Wake up By:</p>
				<br />
				<AppTimePicker disabled={timeDisabled}/>
			</div>
			<br />
			<div className="control">
				<button
					className="big-btn-awake"
					disabled={awakeDisabled}
					onClick={awakeClick}
				>
					Awake
				</button>
				<RangeSlider disabled={happinessDisabled}/>
			</div>
		</div>
	);
}
