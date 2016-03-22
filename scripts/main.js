var handleData = function(data) {
	var container = $('#user-repos');
  data.results.forEach(function(val, i, arr) {
    var newTitle = $('<div></div>', {'title': val.listing_id}).html(val.title);
    var newMaker = $('<div></div>', {'maker': val.listing_id}).html(val.Shop.shop_name);
    var newPrice = $('<div></div>', {'price': val.listing_id}).html(val.Shop.shop_price);
    var newImage = $('<img/>', {'src': val.Images[0].url_75x75});
    console.log(newTitle);
    container.append(newTitle);
    console.log(newPrice);
    container.append(newPrice);
    console.log(newMaker);
    container.append(newMaker);
    console.log(newImage);
    container.append(newImage);
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
