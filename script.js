var isDate = function (input) {
  
	if(!isNaN(date.parse(input))){
		return false;
	}
	return true;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
