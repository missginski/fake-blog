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

parseRSS('https://feeds.theguardian.com/theguardian/uk/rss');

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
	for (let i = 0; i <= 3; i++){
		let article = articles[i];
		let myData = new NewData(article.title, article.link, article.pubDate, article.enclosure.link, article.content, article.thumbnail);
		myArticles.push(myData);
	}
	showArticles(myArticles)
}

showArticles = function(myArticles){
	// console.log(myArticles)
	let carImg = $('.carousel-item img');
	let carTitle = $('.carousel-item a');
	let carSource = $('.carousel-item p');

	$.each(myArticles, function(i, eachArticle){
		// console.log(eachArticle)
		let title = eachArticle.title;
		let link = eachArticle.link;
		let img = eachArticle.img;

		$('carImg').each(function(i){
			$('carImg').attr('src', img)
			console.log(i)
		})

		// listTitle.text(title);
		// listLink.attr('src', link);
		// listImg.attr('src', img);
		// console.log(title, link, img)
	})

	// console.log(title, link, img)
}
