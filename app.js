/** @format */

window.onload = function () {
	main();
};

function main() {
	const date = new Date();

	document.getElementById('date-btn').addEventListener('click', function () {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];

		const currentDate = `${days[date.getDay()]} ${date.getDate()} ${
			months[date.getMonth()]
		}, ${date.getFullYear()}`;

		document.getElementById('date').innerText = currentDate;
	});

	document.getElementById('time-btn').addEventListener('click', function () {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		const currentTime = `${hours} : ${minutes} : ${seconds} ${ampm}, ${timeZone}`;
		document.getElementById('time').innerText = currentTime;
	});

	document.getElementById('reset-btn').addEventListener('click', function () {
		document.getElementById('date').innerText = 'Date';
		document.getElementById('time').innerText = 'Time';
	});
}
