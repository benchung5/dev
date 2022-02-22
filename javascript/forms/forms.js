function submitForm(e) {
	// prevent form from refreshing the page
	e.preventDefault();
	// create fromdata object from an existing form
	let formData = new FormData(e.target);

	// append new value to formData
	formData.append('key', myValue);

	// use this to log out formdata values
	console.log(Array.from(formData));
	// or
	for (var pair of formData.entries()) {
	    console.log(pair[0]+ ', ' + pair[1]); 
	}
}