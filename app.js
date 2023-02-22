const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Bring in the routes
app.use(require("./routes/user"));

//Setup Error Handlers
const errHandlers = require("./handlers/errorHandlers");
app.use(errHandlers.notFound);
app.use(errHandlers.mongooseErrors);
if (process.env.ENV === "DEVELOPMENT")
    app.use(errHandlers.developmentErrors);
else
    app.use(errHandlers.productionError);


module.exports = app;