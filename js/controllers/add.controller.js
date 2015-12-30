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
      console.log('Email must contain an @ symbol');
    } else {
      $scope.contact.emailError = undefined;
    }

  });

  function checkEmail (x) {
    return (x.indexOf('@') >= 0) ? true : false;
  }

  // Website Field 

  $scope.$watch('contact.website', function (input) {

    if(!input) return; 

    if(!checkWebsite(input)) {
      $scope.contact.websiteError = 'Website must contain http(s)';
      console.log('Website must contain http(s)');
    } else {
      $scope.contact.websiteError = undefined;
    }

  });

  function checkWebsite (x) {
    var pattern = /^https?:\/\//i;
    return pattern.test(x);
  }


  // Add Contact function

  function addContact (contactObj) {

    if(!checkEmpty(contactObj.name)) {
      console.log('Name is empty');
      $scope.contact.nameError = 'Name field cannot be empty';
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

  // Check Empty Function 

  function checkEmpty (x) {
    return x ? true : false;
  }

};

AddController.$inject = ['ContactService', '$state', '$scope'];

export default AddController;