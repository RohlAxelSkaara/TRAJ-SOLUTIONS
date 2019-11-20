function createArticle() {
    var typeOfArticle = document.getElementById('typeOfArticle').value;
    var articleTitle = document.getElementById('title').value;
    var articleText = document.getElementById('text').value;
    document.getElementById('newTitle').innerHTML = articleTitle;
    document.getElementById('newText').innerHTML = articleText;
    document.getElementById('newArticleType').innerHTML = typeOfArticle;

    document.location.href = "forum.html";
}