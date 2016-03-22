var handleData = function(data) {
	// var container = $('#user-repos');
 //  data.forEach(function(val, i, arr) {
 //    var newEl = $('<div></div>', {'data-id': val.id}).html(val.name);
 //    // console.log(newEl);
 //    container.append(newEl)
 //  });
 //  $('div').on('click', function(e) {
 //    console.log($(e.target).data());
 //  });
 console.log(data);
};

var settings = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=n3iy1fr67xznijmu258b9ksu&keywords={search term}&includes=Images,Shop',
	type: 'GET',
	success: handleData,
	dataType: 'jsonp',

	error: function(err) {
		console.log(err);
	},
	complete: function() {
		console.log('I got a response');
	}
};

$.ajax(settings);
