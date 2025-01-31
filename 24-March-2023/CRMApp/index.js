const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = require("./config/server.config");
const dbUri = require("./config/db.config");
const authRoutes = require('./routes/auth.routes');

app.use(bodyParser.json());
authRoutes(app);

app.listen(PORT, ()=>{
    console.log("server is listening to the port: ", PORT);
    /* connect to mongo db */
    mongoose.connect(dbUri).then(
        () => { 
            /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
            console.log("connected to mongo db successfully");
        },
        err => { 
            /** handle initial connection error */
            console.log("Error occurred: ", err);
        }
    );
})

