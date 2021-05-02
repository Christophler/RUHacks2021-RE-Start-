import { useState, Fragment } from "react";
import Start from "./controls/start";
import Awake from './controls/awake';
import End from './controls/end';

export default function Controls(props) {
	const [currentControl, setCurrentControl] = useState("start"); // start, awake, end
	const [timeWokenUp, setTimeWokenUp] = useState("00:00");

	function onClickStart() {
		setCurrentControl("awake");
	}

	function onClickAwake() {
		setCurrentControl("end");
		var date = new Date();
		setTimeWokenUp(date.getHours() + ":" + date.getMinutes());
	}

	function onClickStartAgain() {
		setCurrentControl("start");
	}

	const handleControlRender = () => {
		if (currentControl === "start") {
			return <Start onClickStart={onClickStart}/>;
		} else if(currentControl === "awake") {
			return <Awake onClickAwake={onClickAwake}/>
		} else if(currentControl === "end") {
			return <End onClickStartAgain={onClickStartAgain} timeWokenUp={timeWokenUp}/>
		}
	};

	return (
		<div className="controls">
			{handleControlRender()}
			<br />
		</div>
	);
}
