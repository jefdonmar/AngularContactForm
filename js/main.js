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
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ContactService', ContactService)
;
