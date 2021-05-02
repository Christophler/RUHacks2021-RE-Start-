import { useState, Fragment } from "react";

function Awake(props) {
	return (
		<div className="control">
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
