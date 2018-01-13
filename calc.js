

function numberPress(number) {
	if (display.value === '0') {
		display.value = number;
	}

	else {
		display.value += number;
	}
}