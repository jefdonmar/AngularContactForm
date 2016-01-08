let AddController = function(ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;
  vm.checkEmpty = checkEmpty;
  vm.checkEmail = checkEmail;
  vm.checkWebsite = checkWebsite;
  

  // Email Field 
  $scope.$watch('contact.email', function (input) {

    if(!input) return; 

    if(!checkEmail(input)) {
      $scope.contact.emailError = 'Email must contain an @ symbol';
      return console.log('Email must contain an @ symbol');
    } else {
      $scope.contact.emailError = undefined;
    }

  });

  // Website Field 

  $scope.$watch('contact.website', function (input) {

    if(!input) return; 

    if(!checkWebsite(input)) {
      $scope.contact.websiteError = 'Website must contain http(s)';
      return console.log('Website must contain http(s)');
    } else {
      $scope.contact.websiteError = undefined;
    }

  });


  // Add Contact function

  function addContact (contactObj) {

    if(!checkEmpty(contactObj.name)) {
      console.log('Name is empty');
      $scope.contact.nameError = 'Name field cannot be empty';
    }

    if(!checkEmpty(contactObj.email)) {
      console.log('Email field empty');
    }

    if (!checkEmail(contactObj.email)) {
      console.log('Email field empty');
    }

    if(!checkEmpty(contactObj.website)) {
      return console.log('website is empty');
    }

    if (!checkWebsite(contactObj.website)) {
      return console.log('website is empty');
    }

    if(!checkEmpty(contactObj.message)) {
      console.log('Message is empty');
      $scope.contact.messageError = 'Message field cannot be empty';
    }

    console.log('YAY!! Addition');

    ContactService.addContact(contactObj).then( (res) =>{      
      console.log(res);
      $state.go('root.home');

    });
  }

  // Check Input Fields 

  function checkEmpty (x) {
    return x ? true : false;
  }

  function checkEmail (x) {
    return (x.indexOf('@') >= 0) ? true : false;
  }

  function checkWebsite (x) {
    var pattern = /^https?:\/\//i;
    return pattern.test(x);
  }
};

AddController.$inject = ['ContactService', '$state', '$scope'];

export default AddController;