var handleData = function(data) {
	var container = $('#userData');
  data.results.forEach(function(val, i, arr) {
    var newEl = $('<div></div>', {'data-id': val.listing_id}).html(val.title);
    console.log(newEl);
    container.append(newEl);
  });
//   $('div').on('click', function(e) {
//     console.log($(e.target).data());
//   });
//  console.log(data.url);
};

var settings = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=n3iy1fr67xznijmu258b9ksu&keywords=whiskey&includes=Images,Shop',
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
