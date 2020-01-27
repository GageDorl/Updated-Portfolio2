const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes")


  app.use(express.json());
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  app.use("/api",routes)
  const frontend = path.join(__dirname, 'client/build');

// map the requests to the static react build directory
  app.use('/projects', express.static(frontend));
  app.use('/contact', express.static(frontend));
// all the unknown requests are redirected to the react SPA
  app.use(function (req, res, next) {
    res.sendFile(path.join(frontend, 'index.html'));
  });
  app.use(express.urlencoded({ extended: true }));
app.listen(PORT, function(){
    console.log(`Now listening on ${PORT}`)
})
