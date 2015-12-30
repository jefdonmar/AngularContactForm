import angular from 'angular';
import 'angular-ui-router';

// Config import
import config from './config';

// Controllers 
import HomeController from './controllers/home.controller';
import AddController from './controllers/add.controller';

// Services
import ContactService from './services/contact.service';




angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-PARSE-Application-Id': 'qwFfGX2xR8lCxcjOJkX2uqWcWptm32YYu2lyGihK',
        'X-PARSE-REST-API-Key': 'oD2ardPypMrRD70jmY1jEZxNyYMM5UQXH0BCPZqs'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ContactService', ContactService)
;
