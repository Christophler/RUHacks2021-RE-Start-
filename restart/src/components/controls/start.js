import { useState } from "react";
import AppTimePicker from "../timepicker";

function Start(props) {
	return (
		<div className="control">
			<button
				className="big-btn-start"
				disabled={""}
				onClick={props.onClickStart}
			>
				Start
			</button>
			<span>
				{" "}
				<p>Desired Time to Wake up By:</p>
				<br />
				<AppTimePicker disabled={""} />
			</span>
		</div>
	);
}

export default Start;
