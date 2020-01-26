const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes")

  app.use(express.json());

  app.use(routes)

app.listen(PORT, function(){
    console.log(`Now listening on ${PORT}`)
})