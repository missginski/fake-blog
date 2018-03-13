const api_key = config.API_KEY;

function renderAsideStories() {
	let url = 'http://feeds.feedburner.com/TechCrunch/';
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
				let template = $('#aside-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#aside').html(rendered);
			})
		}
	})
}
renderAsideStories()

function renderLatestStories() {
	let url = 'https://www.theverge.com/rss/frontpage';
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
				console.log(myArticles)
				let template = $('#latest-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#latest').html(rendered);
			})
		}
	})
}
renderLatestStories()

function renderPopularStories() {
	let url = 'http://feeds.mashable.com/Mashable';
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
				console.log(myArticles)
				let template = $('#popular-tmpl').html();
				let rendered = Mustache.render(template, myArticles);
				$('#popular-stories').html(rendered);
			})
		}
	})
}
renderPopularStories()

function parseRSS(url) {
	$.ajax({
		method: 'GET',
		dataType: 'json',
		url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url) + '&api_key=' + api_key,
		success: function(response){
			if (response.status != 'ok'){
				throw response.message;
			}
			// handleResponse(response, ii)
			console.log(response)
			return response
		}
	});
}
parseRSS('http://nypost.com/tech/feed/')

function handleResponse(response, ii) {
	let articles = response.items;
	let myArticles = [];
	$.each(articles, function(i, eachArticle){
		myArticles.push(eachArticle)
		if (i === ii) {
			return false;
		}
		showTopStories(myArticles)
		// return myArticles
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
}
