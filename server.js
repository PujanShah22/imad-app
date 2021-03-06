var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Pujan | article-one',
        heading: 'Artile One',
        content: `<p>
                       This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                   </p>
                   <p>
                       This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                   </p>`
    },
    'article-two' : {
        title: 'Pujan | article-two',
        heading: 'Artile Two',
        content: `<p>
                       This is the content for my second article.This is the content for my first article.This is the content for mysecond article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
                   </p>`
    },
    'article-three' : {
        title: 'Pujan | article-three',
        heading: 'Artile Three',
        content: `<p>
                       This is the content for my three article.This is the content for my three article.
                   </p>`
    }
};

function createTemplate(data) {
    
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
            <html>
               <head>
                   <title>
                       ${title}
                   </title>
                   <meta name="viewport" content = "width=device-width , initial-scale = 1" />
                   <link href="/ui/style.css" rel="stylesheet"/>
               </head>
               
               <body>
                   <div class="container">
                       <div>
                           <a href="/">Home</a>
                       </div>
                       <h3>
                           ${heading}
                       </h3>
                       <hr/>
                       <div>
                          ${content}
                       </div>
                   </div>
               </body>
            </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
  
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
