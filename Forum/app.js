function createArticle() {
    //document.location.href = "forum.html";
    var typeOfArticle = document.getElementById('typeOfArticle').innerHTML;
    localStorage.setItem('articleType', typeOfArticle);
    //document.getElementById('newArticleType').innerHTML = localStorage.getItem('articleType');








    /*
    var typeOfArticle = document.getElementById('typeOfArticle').value;
    var articleTitle = document.getElementById('title').value;
    var articleText = document.getElementById('text').value;

    document.location.href = "forum.html";

    document.getElementById('newTitle').innerHTML = articleTitle;
    document.getElementById('newText').innerHTML = articleText;
    document.getElementById('newArticleType').innerHTML = typeOfArticle;
     */
}