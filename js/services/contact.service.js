let ContactService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/contact';

  this.addContact = addContact;
  this.getContacts = getContacts;

  function Contact (contactObj) {
    this.name = contactObj.name;
    this.email = contactObj.email;
    this.website = contactObj.website;
    this.message = contactObj.message;
  } 

  function addContact (contactObj) {
    let contact = new Contact (contactObj);
    return $http.post(url, contact, PARSE.CONFIG);
  }

  function getContacts () {
    return $http.get(url, PARSE.CONFIG);
  }


};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;