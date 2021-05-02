import { Component, Fragment } from "react";
import { RangeStepInput } from "react-range-step-input";

class RangeSlider extends Component {
	state = {
		slider_val: 100,
	};

	onChange = (e) => {
		this.setState({ slider_val: e.value });
	};

	render() {
		return (
			<Fragment>
				<RangeStepInput
					disabled={this.props.disabled}
					step={25}
					min={0}
					max={100}
					value={this.state.slider_val}
					onChange={this.onChange.bind(this)}
				/>
			</Fragment>
		);
	}
}

export default RangeSlider;
