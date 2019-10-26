var apiKey = "OisMhG5CRGOmgESGOsDUeKF55eCQbZQl";
var searchItem = $("#searchTerm").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchItem + "&api-key=";


$.ajax({
    url: queryURL + apiKey,
    method: "GET"
}).then(function(response) {



});

