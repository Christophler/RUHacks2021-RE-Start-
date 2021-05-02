import RangeSlider from "../rangeslider";

export default function End(props) {
	return (
		<div className="control">
            <div className="center">You woke up at: {props.timeWokenUp}</div>
            <br/>
			<span>Enter Happiness Level:</span>
			<RangeSlider disabled={""} />
			<br />
			<br />
			<button onClick={props.onClickStartAgain} id="start-again" className="big-btn-start-again">
				Start Again
			</button>
		</div>
	);
}
