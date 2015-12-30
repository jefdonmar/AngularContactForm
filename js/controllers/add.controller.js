let AddController = function(ContactService, $state, $scope) {

  let vm = this;

  vm.addContact = addContact;

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