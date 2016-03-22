var handleData = function(data) {
	var container = $('#user-repos');
  data.results.forEach(function(val, i, arr) {
    var newTitle = $('<div></div>', {'title': val.listing_id}).html(val.title);
    var newMaker = $('<div></div>', {'maker': val.listing_id}).html(val.Shop.shop_name);
    var newPrice = $('<div></div> <br>', {'price': val.listing_id}).html(val.Shop.shop_price);
    console.log(newTitle);
    container.append(newTitle);
    console.log(newPrice);
    container.append(newPrice);
    console.log(newMaker);
    container.append(newMaker);
  });
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
