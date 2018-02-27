let api_key = config.API_KEY;

function parseRSS(url) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			if (response.status != 'ok'){
				throw response.message;
			}
			getArticles(response)
		}
	});
}

// parseRSS('http://nypost.com/tech/feed/');

getArticles = function(response) {
	let articles = response.items;
	let myArticles = [];
	function NewData(newTitle, newLink, newDate, newImg, newDesc, newThumbnail){
		this.title = newTitle;
		this.link = newLink;
		this.pubDate = newDate;
		this.img = newImg;
		this.desc = newDesc;
		this.thumbnail = newThumbnail;
	}
	$.each(articles, function(i, eachArticle){
		let myData = new NewData(eachArticle.title, eachArticle.link, eachArticle.pubDate, eachArticle.enclosure.link, eachArticle.content, eachArticle.thumbnail);
		myArticles.push(myData)
	})
	showArticles(myArticles)
}

showArticles = function(myArticles){
	let carItem = $('.carousel-item')
	let carImg = $('.carousel-item img');
	let carTitle = $('.carousel-item a');
	let carDate = $('.carousel-item p')
	$.each(myArticles, function(i, eachArticle){
		let title = eachArticle.title;
		let link = eachArticle.link;
		let img = eachArticle.img;
		// let date = eachArticle.pubDate;

		$(carImg[i]).attr('src', img);
		$(carTitle[i]).attr('src', link).text(title);
		// $(carDate[i]).text(date);
	})
}


showCarouselItems = function(){
	parseRSS('http://nypost.com/tech/feed/');

}

showCarouselItems()
