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
			showTopStories(response)
			// showArticles(response)
			// return response
			console.log(response)
		}
	});
}
// parseRSS('http://nypost.com/tech/feed/');

var obj = {
	 articles : [
		{
			title: "Jeff Zucker joins fight to monetize mobile journalism",
			link: "https://nypost.com/2018/02/26/jeff-zucker-joins-fight-to-monetize-mobile-journalism/",
			img: "http://thenypost.files.wordpress.com/2018/02/afp_11a95l.jpg?quality=90&amp;strip=all"
		},
		{
			title: "Ford to test self-driving pizza delivery with Domino’s",
			link: "https://nypost.com/2018/02/27/ford-to-test-self-driving-pizza-delivery-with-dominos/",
			img: "http://thenypost.files.wordpress.com/2018/02/ford-self-driving-car.jpg?quality=90&amp;strip=all"
		}
	]
};

// var obj = {
// 			title: "Jeff Zucker joins fight to monetize mobile journalism",
// 			link: "https://nypost.com/2018/02/26/jeff-zucker-joins-fight-to-monetize-mobile-journalism/",
// 			img: "http://thenypost.files.wordpress.com/2018/02/afp_11a95l.jpg?quality=90&amp;strip=all"
// 		}


// console.log(JSON.stringify(obj));

function showTopStories() {

	let template = $('#aside-tmpl').html();
	let html = Mustache.to_html(template, obj);
	$('#aside').html(html);

	// console.log(obj.articles)
}

showTopStories()





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
		// if (i === ii) {
		// 	return false;
		// }
	})
	// showArticles(myArticles)
}

showArticles = function(myArticles){
	// let carItem = $('.carousel-item')
	// let carImg = $('.carousel-item img');
	// let carTitle = $('.carousel-item a');
	// let carDate = $('.carousel-item p')
	// $.each(myArticles, function(i, eachArticle){
	// 	let title = eachArticle.title;
	// 	let link = eachArticle.link;
	// 	let img = eachArticle.img;
	// 	// let date = eachArticle.pubDate;
	//
	// 	$(carImg[i]).attr('src', img);
	// 	$(carTitle[i]).attr('src', link).text(title);
	// 	// $(carDate[i]).text(date);
	// })
	console.log(myArticles)
}
