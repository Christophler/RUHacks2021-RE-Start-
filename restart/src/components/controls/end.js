import { useState } from "react";
import { startJSON, appendJSON } from "../../util/jsonutil";
import { RangeStepInput } from "react-range-step-input";

export default function End(props) {
	const [sliderVal, setSliderVal] = useState(0);
	return (
		<div className="control">
			<p>Began at: {props.timeStarted}</p>
			<br />
			<p>Suggested time: {props.suggestedTime}</p>
			<br/>
			<p>Desired time up by: {props.desiredTime}</p>
			<br />
			<p>Woke up at: {props.timeWokenUp}</p>
			<br />
			<div>
				<span>Enter Happiness Level:</span>
				<RangeStepInput
					min={0}
					max={100}
					step={25}
					value={sliderVal}
					onChange={(e) => {
						setSliderVal(e.target.value);
					}}
				/>
				<span>Lv: {sliderVal}</span>
			</div>
			<br />
			<br />
			<button
				onClick={props.onClickStartAgain}
				id="start-again"
				className="big-btn-start-again"
			>
				Start Again
			</button>
		</div>
	);
}
