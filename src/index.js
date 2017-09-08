const express = require('express'),
  path = require('path');

let app = express(),
  routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

for(var i = 0; i < routes.length; i++) {
  let { route, template, title, data } = routes[i];
  app.get(route, (req, res) => {
    res.render(template, data);
  });
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
