import { Fragment, useState } from "react";
import TimePicker from "react-time-picker";

function AppTimePicker() {
	const [value, onChange] = useState("10:00");
	return (
		<Fragment>
			<div>
				<TimePicker onChange={onChange} value={value} />
			</div>
		</Fragment>
	);
}

export default AppTimePicker;
