import { useState, Fragment } from "react";
import Start from "./controls/start";
import Awake from "./controls/awake";
import End from "./controls/end";

export default function Controls(props) {
	const [currentControl, setCurrentControl] = useState("start"); // start, awake, end
	const [timeWokenUp, setTimeWokenUp] = useState("00:00");
	const [timeStarted, setTimeStarted] = useState("00:00");

	function onClickStart() { // when user clicks start
		setCurrentControl("awake");
		props.changeColor("awake");
		var date = new Date();
		setTimeStarted() // set time started [HENRY]
	}

	function onClickAwake() { // when user clicks awake
		setCurrentControl("end");
		var date = new Date();
		setTimeWokenUp(); // set time woken up [HENRY]
		props.changeColor("end");
	}

	function onClickStartAgain() {
		setCurrentControl("start");
		props.changeColor("start");
	}

	const handleControlRender = () => {
		if (currentControl === "start") {
			return <Start onClickStart={onClickStart} />;
		} else if (currentControl === "awake") {
			return <Awake onClickAwake={onClickAwake} />;
		} else if (currentControl === "end") {
			return (
				<End
					onClickStartAgain={onClickStartAgain}
					timeStarted = {timeStarted}
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
