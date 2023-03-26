var api = require("./src/api.js").app;
var users = require("./src/users.json");

api.get("/", function (request, response) {
  response.json("NodeJS REST API");
});

// http://localhost:3000/

api.get("/users", function (request, response) {
  response.json(users);
});

// http://localhost:3000/

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});

api.delete("/deleteUser", (request, response) => {
  var currentIndex = null;
  users.forEach((item, index) => {
    const name = request.query.name;
    if (name == item.name) {
      currentIndex = index;
    }
  });
  //response.json(currentIndex);
  users.splice(currentIndex, 1);
  response.json(users);
});

api.delete("/deleteUser", (request, response) => {
  var currentIndex = null;
  users.forEach((item, index) => {
    const name = request.query.name;
    if (name == item.name) {
      currentIndex = index;
    }
  });
  //response.json(currentIndex);
  users.splice(currentIndex, 1);
  response.json(users);
});