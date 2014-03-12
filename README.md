# SF Movie Location Web Application

## Overview

Web application to display the locations where the movie was filmed in San Francisco utilizing the [Film
Locations](https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am) data.


### Tech stack

* [node.js](http://nodejs.org) - For its ease of standing up web server that goes well with [Heroku](https://devcenter.heroku.com/articles/nodejs)
* [AngularJS](http://angularjs.org) - Impressive client-side framework providing MVVM pattern, Dependency Injection, 2-way data binding, Templating to name a few that I attempted 
  to incorporate into this SPA (Single-Page Application) in just couple of days of exposure to the framework.
* [Twitter's Bootstrap](http://getbootstrap.com/) - For bootstraping the web page styles.
* [MongoDB] (http://mongodb.com) - Backend with RESTful services using node.js


### Running the app 

* Download the repository
* Install npm modules: `npm install`
* Start mongod deamon
* Run `node server.js`


## Directory Layout

      ├── Procfile                     -- list of processes to run on Heroku
      ├── package.json                 -- NPM package dependencies
      └── server.js                    -- node webserver
      ├── config
      │   └── db.js                    -- REST endpoints and db populate
      ├── public
      │   ├── index.html               -- Main template for the app
      │   └── views
      │       └── mapview.html         -- partial template file with the map view
      │   ├── css
      │   │   └── app.css              -- app specific styles
      │   ├── js
      │   │   ├── app.js               -- app module init file with directives injected
      │   │   ├── controllers.js       -- app controller
      │   │   └── services.js          -- app services for common/init methods
      ├── test                         -- tests go here


## Live Demo

Demo of the app deployed to Heroku:
 
 http://whispering-earth-9115.herokuapp.com
