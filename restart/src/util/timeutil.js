export function getSleepCycles(start_time, desired_time) {
	//assume desired_time is some date later then start_time

	var day1 = start_time;
	var day2 = desired_time;

	var increment = 90 * 60 * 1000; //90 mins in mill secs

	console.log(day1, day2);

	var x1 = day1.getTime();
	var x2 = day2.getTime();

	var suggested_time = x1;
	var i = 0;

	for (i = 0; suggested_time < x2 - increment; i++) {
		suggested_time += increment;
	}

	suggested_time = new Date(suggested_time);
	return suggested_time;
}