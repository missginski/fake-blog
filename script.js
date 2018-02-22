let api_key = config.API_KEY;

function parseRSS(url) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(data){
			if (data.status != 'ok'){
				throw data.message;
			}
			getArticles(data)
			// console.log(data)
		}
	});
}

getArticles = function(data) {
	let articles = data.items;
	let myData = {};
	let myArticles = [];


	$.each(articles, function(i, article){
		for (var i in articles){
			var item = articles[i];
			myData.title = item.title;
			myData.link = item.link;
			myData.pubDate = item.pubDate;
			myData.img = item.enclosure.link;
			myData.desc = item.content;
			myData.thumbnail = item.thumbnail;
		}
		let myArticle = myData[i];
		myArticles.push(myArticle);

	})
	showArticles(myArticles)
}



showArticles = function(myData){
	console.log(myData);
}

parseRSS('https://www.vice.com/en_us/rss/');







// select the html elements that will use them and append
