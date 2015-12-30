let HomeController = function(ContactService) {

  let vm = this;

  ContactService.getContacts().then( (res) => {
    console.log(res);
    vm.myContacts = res.data.results;
    console.log(vm.myContacts);
  });
  

};

HomeController.$inject = ['ContactService'];

export default HomeController;