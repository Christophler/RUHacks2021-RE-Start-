import { Fragment, useState } from "react";
import TimePicker from "react-time-picker";

function AppTimePicker(props) {
	const [value, onChange] = useState("12:00");
	return (
		<Fragment>
				<TimePicker disabled={props.disabled} onChange={onChange} value={value} />
		</Fragment>
	);
}

export default AppTimePicker;
