const app = require("./app");
const http = require("http");
const chalk = require("chalk");

app.set("port", 3000);
const server = http.createServer(app);
server.listen(3000);
console.log(chalk.blue("Server On"));
