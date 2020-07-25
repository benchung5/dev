    var country = undefined;

    setCountry();

    function setCountry() {

        var isCAN = false;

        // Set up XHR to get country from IP service
        var xhr = new XMLHttpRequest();
        var link = 'https://freegeoip.net/json/';

        if (isIE() !== false && isIE() < 10) {
            //pre-ie10 doesn't support xhr
        } else {
            xhr.open('GET', link, true);
            xhr.send();
        }

        xhr.onreadystatechange = function () {

            // Successful response from the IP service
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Parse the response
                var res = JSON.parse(xhr.responseText);

                // Set the country code constant
                country = res.country_code;

                console.log('country: ', country);

            } else {
                //console.log('error getting country');
            }
        };
        //check if ie
        var isIE = function() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
        };

    }
	
	
	
	//newer ========================
	
	var Xhr = {
	init: function(options) {
		var inst = Object.create(this);
		return inst;
	},
	send: function(options) {
		// Set up XHR
		var xhr = new XMLHttpRequest();
		var endpoint = options.endpoint;

		//check if ie
		var isIE = function() {
		    var myNav = navigator.userAgent.toLowerCase();
		    return myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
		};

		if (isIE() !== false && isIE() < 10) {
		    //pre-ie10 doesn't support xhr
		} else {
		    xhr.open('GET', endpoint, true);
		    xhr.send();
		}

		xhr.onload = function() {
		    // Successful response from the IP service
		    if (this.status == 200) {
		        //response
		        console.log(this.responseText);

		    }
		};
	}
}

var xhr = function() {
	var xhr = Xhr.init({});

	xhr.send({
		endpoint: 'http://localhost/api/trees/single/alternate-leaf-dogwood'
	});
}


	//newest ========================
	
	//get
	fetch('http://localhost/api/trees/single/alternate-leaf-dogwood', {
		method: 'GET'
	})
	.then(res => {
		// optional check
		if (res.ok) {
			console.log('SUCCESS')
			
		} else {
			console.log('NOT SUCCESSFUL')
		}
		//convert to json gives another promise
		return res.json() 
	})
	.then(data => console.log(data))
	.catch(error => console.log('ERROR'))

	//------post
	fetch('http://localhost/api/trees/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: 'New Tree'
		})
	})
	.then(res => {
		// optional check
		if (res.ok) {
			console.log('SUCCESS')
			
		} else {
			console.log('NOT SUCCESSFUL')
		}
		//convert to json gives another promise
		return res.json() 
	})
	.then(data => console.log(data))
	.catch(error => console.log('ERROR'))
}
