const api_key = config.API_KEY;

function getData(feedurl, handle) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(feedurl) + '&api_key=' + api_key,
		success: function(response) {
			handle(response)
		}
	})
}

function handle(response) {
	console.log(response)
}
getData('https://greatist.com/feed', handle)


function renderCarouselStories() {
	let url = 'https://greatist.com/feed'
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			let articles = response.items,
					myArticles = [];
			$.each(articles, function(i, eachArticle){
				myArticles.push(eachArticle);
				if (i === 3){
					return false;
				}
				// console.log(myArticles)
				let template = $('#carousel-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#carousel').html(rendered);
				$('.carousel-item:first-child').addClass('active');
			})
		}
	})
}
renderCarouselStories()

function renderAsideStories() {
	let url = 'https://thoughtcatalog.com/feed/';
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			let articles = response.items,
					myArticles = [];
			$.each(articles, function(i, eachArticle){
				myArticles.push(eachArticle);
				if (i === 2){
					return false;
				}
				// console.log(myArticles)
				let template = $('#aside-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#aside').html(rendered);
			})
		}
	})
}
renderAsideStories()

function renderLatestStories() {
	let url = 'https://tinybuddha.com/feed/'
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			let articles = response.items,
					myArticles = [];
			$.each(articles, function(i, eachArticle){
				myArticles.push(eachArticle);
				if (i === 3){
					return false;
				}
				// console.log(myArticles)
				let template = $('#latest-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#latest').html(rendered);
			})
		}
	})
}
renderLatestStories()

function renderPopularStories() {
	let url = 'http://www.byrdie.com/rss'
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			let articles = response.items,
					myArticles = [];
			$.each(articles, function(i, eachArticle){
				myArticles.push(eachArticle);
				if (i === 6){
					return false;
				}
				// console.log(myArticles)
				let template = $('#popular-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#popular-stories').html(rendered);
			})
		}
	})
}
renderPopularStories()
