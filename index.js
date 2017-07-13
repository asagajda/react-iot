var express = require('express');
var app = express();

app.set("port", (process.env.PORT || 3000))

app.use(exress.static(__dirname + "/build"))

app.get('*', function (req, res) {
  res.sendfile(__dirname + "/build/index.html");
});

app.listen(app.get("port"), function () {
  console.log('Example app listening on port', app.get("port"));
})
