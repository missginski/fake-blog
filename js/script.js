const api_key = config.API_KEY;
// const carouselFeed = 'https://greatist.com/feed';
const carouselFeed = 'https://thoughtcatalog.com/feed/';
const asideFeed = 'https://thoughtcatalog.com/feed/';
const latestFeed = 'https://tinybuddha.com/feed/';
// const popularFeed = 'http://www.byrdie.com/rss';
const popularFeed = 'https://tinybuddha.com/feed/';


// get article data
function getData(feedurl, handler, val) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedurl) + '&api_key=' + api_key,
		success: function(response) {

			let articles = response.items;
			let myArticles = [];
			$.each(articles, function(i, article) {
				let newArticle = {};
				let oldDate = article.pubDate;

				newArticle.title = article.title;
				newArticle.categories = article.categories;
				newArticle.link = article.link;
				newArticle.thumbnail = article.thumbnail;
				newArticle.enclosure = article.enclosure
				newArticle.content = article.content;
				newArticle.date = date = moment(oldDate).format('MMMM d YYYY');

				myArticles.push(newArticle);
				if ( i === val ) {
					return false;
				}
			})
			handler(myArticles)
		}
	})
}
getData(carouselFeed, renderCarouselStories, 2);
getData(asideFeed, renderAsideStories, 1);
getData(latestFeed, renderLatestStories, 2);
getData(popularFeed, renderPopularStories, 8);


// render articles
function renderCarouselStories(myArticles) {
	let template = $('#carousel-tmpl').html();
	let rendered = Mustache.render(template, myArticles);
	$('#carousel').html(rendered);
	$('.carousel-item:first-child').addClass('active');
}


function renderAsideStories(myArticles) {
	console.log(myArticles)

	let template = $('#aside-tmpl').html();
	let rendered = Mustache.render(template, myArticles);
	$('#aside').html(rendered);
}


function renderLatestStories(myArticles) {
	let template = $('#latest-tmpl').html();
	let rendered = Mustache.render(template, myArticles);
	$('#latest').html(rendered);
}


function renderPopularStories(myArticles) {
	let template = $('#popular-tmpl').html();
	let rendered = Mustache.render(template, myArticles);
	$('#popular').html(rendered);
}
