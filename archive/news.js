/* Create a news site. */
var news = document.createElement('div');
news.innerHTML = '<h1>News</h1>';
var newsList = document.createElement('ul');
newsList.innerHTML = '<li>News item 1</li><li>News item 2</li>';
news.appendChild(newsList);
document.body.appendChild(news);
