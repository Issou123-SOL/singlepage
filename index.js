const http = require("http");
const fs = require("fs");
const { getCodeSandboxHost } = require("@codesandbox/utils");

const PORT = 8080;
//create a server object:
http
  .createServer(function (req, res) {
    res.write("<!DOCTYPE html>");
    // This is the backend, running this code:
    res.write(
      `Hello from CodeSandbox, current host from backend: ${getCodeSandboxHost(
        PORT,
      )}`,
    );

    // And we also have a frontend script that runs the same code:
    res.write("\n");
    res.write("<script>");
    res.write(fs.readFileSync(__dirname + "/client.built.js", "utf-8"));
    res.write("</script>");
    res.end();
  })
  .listen(PORT);
