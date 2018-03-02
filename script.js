const api_key = config.API_KEY;

function parseRSS(url, ii) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			if (response.status != 'ok'){
				throw response.message;
			}
			handleResponse(response, ii)
			return response
		}
	});
}


handleResponse = function(response, ii) {
	let articles = response.items;
	let myArticles = [];
	$.each(articles, function(i, eachArticle){
		myArticles.push(eachArticle)
		if (i === ii) {
			return false;
		}
		showTopStories(myArticles)
		return myArticles
	})
}

function showTopStories(myArticles) {
	console.log(myArticles)
	let template = $('#aside-tmpl').html();
	let html = Mustache.to_html(template, myArticles);
	$('#aside').html(html);
}

function renderFeeds() {
	let asideStories = parseRSS('http://nypost.com/tech/feed/', 2);
	console.log(asideStories)
}

renderFeeds()









// function NewData(newTitle, newLink, newDate, newImg, newDesc, newThumbnail){
// 	this.title = newTitle;
// 	this.link = newLink;
// 	this.pubDate = newDate;
// 	this.img = newImg;
// 	this.desc = newDesc;
// 	this.thumbnail = newThumbnail;
// }

// let myData = new NewData(eachArticle.title, eachArticle.link, eachArticle.pubDate, eachArticle.enclosure.link, eachArticle.content, eachArticle.thumbnail);

// console.log(JSON.stringify(obj));


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
