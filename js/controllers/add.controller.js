let AddController = function(ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;
  vm.checkName = checkName;
  vm.checkEmail = checkEmail;
  vm.checkWebsite = checkWebsite;
  vm.checkMessage = checkMessage;

  // Name Field 
  $scope.$watch('contact.name', function (input) {

    if(!input) return; 

    if(!checkName(input)) {
      $scope.contact.nameError = 'Name field must be filled in';
      console.log('Name field must be filled in');
    } else {
      $scope.contact.nameError = undefined;
    }

  });

  function checkName (x) {
    return x ? true : false;
  }

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

  // Message Field 

  $scope.$watch('contact.message', function (input) {

    if(!input) return; 

    if(!checkMessage(input)) {
      $scope.contact.messageError = 'Message field must be filled in';
      console.log('Message field must be filled in');
    } else {
      $scope.contact.messageError = undefined;
    }

  });

  function checkMessage (x) {
    return x ? true : false;
  }



  function addContact (contactObj) {

    console.log('YAY!! Addition');

    ContactService.addContact(contactObj).then( (res) =>{
      console.log(res);
      $state.go('root.home');

    });
  }

};

AddController.$inject = ['ContactService', '$state', '$scope'];

export default AddController;