function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: async function  () {
      this.usersService = users();
      this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
      this.usersService.get().then((response) => {
        this.users = response.data;
        console.log(this.users);
      });
    },
    methods: {},
  });
}

const button = document.getElementById("btnDeleteUser");
button.addEventListener("click", handleDeleteUser); 

async function handleDeleteUser(event) {
  this.usersService = users();
  await this.usersService.deleteUser();
}

function handleChangeCity(event) {
  this.formUserCity = event.target.value;
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
