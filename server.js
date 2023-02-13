var http = require('http');
var url = require("url");
var querystring = require('querystring');

var server = http.createServer(function (req,res){
    /*res.writeHead(200);
    res.end('Salut les webistes');*/

    /*-----------------------------------*/

   /* res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<p>Voici un paragraphe <strong>HTML</strong>!</p>');*/

    /*-----------------------------------*/


   /* res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>' +
        '<html>' +
            '<head>'+
                '<meta charset="utf-8" />'+
                '<title>Ma page Node.js !</title>'+
            '</head>'+
            '<body>' +
                '<p>Voici un paragraphe <strong>HTML</strong></p>'+
            '</body>'+
        '</html>' );
    res.end();*/


/*-----------------------------------*/

    /*var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write('Bien on avance!');
    res.end();*/

    /*-----------------------------------*/

    /*var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type":"text/plain"});
    if (page == '/'){
        res.write('Vous etes dans la page d\'accueil');
    }
    else if (page == '/Contact'){
        res.write('Vous êtes dans la page Contact !');
    }
    else if (page == '/Affichage/1/user'){
        res.write('Afficher l\'utilisateur qui a l\'id 1 !')
    }
    res.end();*/

    /*-----------------------------------*/

    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-Type":"text/plain"});
    if ('id' in params && 'login' in params){
        res.write('Votre id est' + params['id'] +
            'et votre login' + params['login']) ;
    }
    else {
        res.write('Veuillez saisir votre id et login !');
    }
    res.end();


});
server.listen(8080);