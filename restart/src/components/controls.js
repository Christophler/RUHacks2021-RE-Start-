import { useState, Fragment } from "react";
import Start from "./controls/start";
import Awake from "./controls/awake";
import End from "./controls/end";
import {getSleepCycles} from '../util/timeutil';

export default function Controls(props) {
	const [currentControl, setCurrentControl] = useState("start"); // start, awake, end
	const [timeWokenUp, setTimeWokenUp] = useState("00:00");
	const [timeStarted, setTimeStarted] = useState("00:00");
	const [desiredTime, setDesiredTime] = useState("00:00");
	const [suggestedTime, setSuggestedTime] = useState("00:00");

	function onClickStart() { // when user clicks start
		setCurrentControl("awake");
		props.changeColor("awake");
		var date = new Date();
		setTimeStarted(date.toLocaleTimeString()) // set time started [HENRY]
	}

	function onClickAwake() { // when user clicks awake
		setCurrentControl("end");
		var date = new Date();
		setTimeWokenUp(date.toLocaleTimeString()); // set time woken up [HENRY]
		props.changeColor("end");
	}

	function onClickStartAgain() {
		setCurrentControl("start");
		props.changeColor("start");
	}

	function onTimeChange(value) {
		setTimeStarted(value);
		handleSuggestedTime(value);
	}

	function handleSuggestedTime(value) {
		const split = value.split(":");
		const hours = split[0];
		const minutes = split[1];
		const desiredBy = new Date(2021, 5, 2, hours, minutes, 0, 0);
		const actualDesiredBy = getSleepCycles(new Date(), desiredBy);
		setSuggestedTime(actualDesiredBy.toLocaleTimeString());
		setDesiredTime(desiredBy.toLocaleTimeString());
		return actualDesiredBy.toLocaleTimeString();
	}

	const handleControlRender = () => {
		if (currentControl === "start") {
			return <Start handleSuggestedTime={handleSuggestedTime} onTimeChange={onTimeChange} onClickStart={onClickStart} />;
		} else if (currentControl === "awake") {
			return <Awake suggestedTime={suggestedTime} timeStarted={timeStarted} onClickAwake={onClickAwake} />;
		} else if (currentControl === "end") {
			return (
				<End
					onClickStartAgain={onClickStartAgain}
					timeStarted = {timeStarted}
					suggestedTime={suggestedTime}
					desiredTime={desiredTime}
					timeWokenUp={timeWokenUp}
				/>
			);
		}
	};

	return (
		<div className="controls">
			{handleControlRender()}
			<br />
		</div>
	);
}
