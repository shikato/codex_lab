/* Write a news site like Yahoo!JAPAN. */
var news = document.createElement('div');
news.innerHTML = '<h1>Yahoo!JAPAN</h1>';
var newsList = document.createElement('ul');
news.appendChild(newsList);
document.body.appendChild(news);
var newsItem = document.createElement('li');
newsItem.innerHTML = '<a href="http://www.yahoo.co.jp/">Yahoo!</a>';
newsList.appendChild(newsItem);
var newsItem = document.createElement('li');
newsItem.innerHTML = '<a href="http://www.yahoo.co.jp/">Yahoo!</a>';
newsList.appendChild(newsItem);
var newsItem = document.createElement('li');
newsItem.innerHTML = '<a href="http://www.yahoo.co.jp/">Yahoo!</a>';
newsList.appendChild(newsItem);

