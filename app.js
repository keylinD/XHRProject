const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit',function(e){
	e.preventDefault();
	responseContainer.innerHTML = '';
	searchedForText = searchField.value;
	getNews();
});

function getNews ()  {
	const articleRequest = new XMLHttpRequest();
	/*articleRequest.open('GET',` http://api.nytimes.com/svc/search/v2/articlesearch.json? q = ${searchedForText} & api - key = dc7de0693a394d8e9130e06f1cf39c56`);*/
	articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=dc7de0693a394d8e9130e06f1cf39c56`);
	articleRequest.onload = addNews;
	articleRequest.onerror =handleError;
	articleRequest.send();
}

function handleError () {
	console.log('Se ha presentado un erro');
};

/*const addNews = () => {
	const data = JSON.parse(this.responseText);
	console.log(data);
};*/

/*function addNews(){
	const data = JSON.parse(this.responseText);
	const response = data.response;
	console.log(response);
}*/

/*function addNews(){
	const data = JSON.parse(this.responseText);
	const response = data.response;
	console.log(response);
}*/

function addNews(){
	const data = JSON.parse(this.responseText);
	const article = data.response.docs[0];
	const title = article.headline.main;
	const snippet = article.snippet;
	
	let li = document.createElement('li');
	li.className = 'articleClass';
	li.innerText = snippet;

	responseContainer.appendChild(li);
}