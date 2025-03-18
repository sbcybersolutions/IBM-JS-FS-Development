// Declare xml request variable
var xhr = new XMLHttpRequest();

// Declare named url variable
var url = './health_article.json';

// Get data
xhr.open('GET', url, true);

// Set response type to JSON
xhr.responseType = 'json';

// Loading function
xhr.onload = function () {
    if (xhr.status === 200) { // Ensure request was successful
        var articles = xhr.response.articles; 
        var articlesDiv = document.getElementById('articles');

        if (!articlesDiv) {
            console.error("Element with ID 'articles' not found.");
            return;
        }

        // Loop through articles inside onload
        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Append elements
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error("Failed to load health_article.json. Status:", xhr.status);
    }
};

// Send request
xhr.send();
