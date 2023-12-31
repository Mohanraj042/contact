const express = require('express');
const userroutes = require('./routes/user.routes');
const todorouters=require("./routes/todorouter")
const contact=require("./routes/contactrouter")
const invite=require("./routes/inviterouter")
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(userroutes);
app.use(todorouters);
app.use(contact);
app.use(invite)

module.exports = app;