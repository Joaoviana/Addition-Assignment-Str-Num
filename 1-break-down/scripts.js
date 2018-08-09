// (num += String(num += 1)) %2

function trace() {
	console.log("-----------------");

	// read & clean user input
	var num_type = document.getElementById("num-type").value;
	var num_value = document.getElementById("num-value").value;
	var num = cast(num_type, num_value);
	
	var s0 = {
		num: {[num_type]: num}
	};
		
	var expected_type = document.getElementById("expected-type").value;
	var expected_value = document.getElementById("expected-value").value;
	var expected = cast(expected_type, expected_value);
	
	var expectedNum_type = document.getElementById("expectedNum-type").value;
	var expectedNum_value = document.getElementById("expectedNum-value").value;
	var expectedNum = cast(expectedNum_type,expectedNum_value);


	// do the logic
	var s1;
	try {
		num+=1;
		s1 =num;
	} catch(err) {
		throw(err);
	};

	var s2;
	try {
		s2 = String(s1);
	} catch(err) {
		throw(err);
	};
	
	var s3;
	try {
		num += s2;
		s3 = num;
	} catch(err) {
		throw(err);
	};

	var sf;
	try {
		sf = s3 % 2;
	} catch(err) {
		throw(err);
	};

	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "(inspect page)";
	console.log(s0);

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = typeof s1 + ": " + s1;

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = typeof s2 + ": " + s2;
	
	var s3_display = document.getElementById("s3");
	s3_display.innerHTML = typeof s3 + ": " + s3;

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = typeof sf + ": " + sf;

	console.assert(expected === sf, [{expected: expected}, {actual: sf}] );
	console.assert(expectedNum === num, [{expectedNum: expected}, {actual: num}] );
};

function cast(type, value) {

    if (type == "Number") {
    	return Number(value);

    } else if (type == "String") {
    	return value;

    } else if (type == "Null") {
    	return null;

    } else if (type == "Boolean") {
		if (value === "true") {
			return true;
		} else {
			return false;
		};
    };
    // functions return undefined by default
};

function clear_table() {
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "";

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = "";

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = "";
	
	var s3_display = document.getElementById("s3");
	s3_display.innerHTML = "";

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = "";
};
