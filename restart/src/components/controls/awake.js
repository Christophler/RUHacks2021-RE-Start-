import { useState, Fragment } from "react";

function Awake(props) {
	return (
		<div className="control">
			<p>Began Sleep at: {props.timeStarted}</p>
			<br/>
			<p>Suggested Wake Up Time: {props.suggestedTime}</p>
			<br/>
			<button
				className="big-btn-awake"
				disabled={""}
				onClick={props.onClickAwake}
			>
				Awake
			</button>
		</div>
	);
}

export default Awake;
