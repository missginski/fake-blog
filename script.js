let rss_key = config.API_KEY;


function parseRSS(url) {
	$.ajax({
		type: 'GET',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
		success: function(data){
			console.log(data)
		}
	});
}

parseRSS('http://feeds.feedburner.com/CssTricks')



$.ajax({
	url: 'https://api.rss2json.com/v1/api.json',
	method: 'GET',
	dataType: 'json',
	data: {
		rss_url: 'https://www.theverge.com/culture/rss/index.xml',
		api_key: rss_key,
		count: 2
	}
}).done(function (response) {
	if (response.status != 'ok'){
		throw response.message;
	}
	console.log('====== ' + response.feed.title + ' ======');

	for (var i in response.items){
		var item = response.items[i];
		console.log(item.title)
	}
});
