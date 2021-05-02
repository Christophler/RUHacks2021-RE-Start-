import { useState } from "react";
import TimePicker from "react-time-picker";

function Start(props) {
	const [value, onChange] = useState("12:00");
	const [suggestedTime, setSuggestedTime] = useState("00:00");

	return (
		<div className="control">
			<button className="big-btn-start" onClick={props.onClickStart}>
				Start
			</button>
			<span>
				<p>Desired Time to Wake up By:</p>
				<br />
				<TimePicker
					disabled={props.disabled}
					onChange={(value) => {
						onChange(value);
						props.onTimeChange(value);
						setSuggestedTime(value);
					}}
					value={value}
				/>
				<p>Suggested Wake up Time: {props.handleSuggestedTime(value)}</p>
			</span>
		</div>
	);
}

export default Start;
