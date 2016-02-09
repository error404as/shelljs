# shelljs
Execute shell commands with output to HTML page

Run `npm install` to install dependencies.

To start local server: `node server.js`

Open `http://localhost:1111`

All shell commands are requested with XHR GET requests. Express handles them for you, execute ShellJS commands and response with shell output.

If you use `cd` commends, make sure to return to the current directory on execution completed. Otherwise it may affect page itself (server-index.html won't be find in your new directory).
