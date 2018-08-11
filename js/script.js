const api_key = config.API_KEY;
const carouselFeed = 'https://greatist.com/feed';
const asideFeed = 'https://thoughtcatalog.com/feed/';
const latestFeed = 'https://tinybuddha.com/feed/';
const popularFeed = 'http://www.byrdie.com/rss';

// get articles
function getData(feedurl, handler) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedurl) + '&api_key=' + api_key,
		success: function(response) {
			handler(response)
		}
	})
}
getData(carouselFeed, renderCarouselStories);
getData(asideFeed, renderAsideStories);
getData(latestFeed, renderLatestStories);
getData(popularFeed, renderPopularStories);

// render articles
function renderCarouselStories(response) {
	let articles = response.items;
	let myArticles = [];

	$.each(articles, function(i, article) {
		myArticles.push(article);
		if ( i === 3 ) {
			return false;
		}
	})

	let template = $('#carousel-tmpl').html();
	let rendered = Mustache.render(template, myArticles);
	$('#carousel').html(rendered);
	$('.carousel-item:first-child').addClass('active');
}

function renderAsideStories(response) {
	let articles = response.items;
	let myArticles = [];

	$.each(articles, function(i, article) {
		myArticles.push(article);
		if ( i === 2 ) {
			return false;
		}

		let template = $('#aside-tmpl').html();
		let rendered = Mustache.render(template, myArticles);
		$('#aside').html(rendered);
	})
}

function renderLatestStories(response) {
	let articles = response.items;
	let myArticles = [];

	$.each(articles, function(i, article) {
		myArticles.push(article);
		if ( i === 3 ) {
			return false;
		}
		let template = $('#latest-tmpl').html();
		let rendered = Mustache.render(template, myArticles);
		$('#latest').html(rendered);
	})
}

function renderPopularStories(response) {
	let articles = response.items;
	let myArticles = [];

	$.each(articles, function(i, article) {
		myArticles.push(article);
		if ( i === 3 ) {
			return false;
		}
		let template = $('#popular-tmpl').html();
		let rendered = Mustache.render(template, myArticles);
		$('#popular-stories').html(rendered);
	})
}
