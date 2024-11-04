const express = require('express');
const {connectDB} = require('../backend/db/DBconnect.js')
const dotenv = require('dotenv')
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
require('./passport/github.auth.js')


const authRoutes = require('./routes/auth.routes.js')
const userRoutes = require( './routes/user.routes.js')
const exploreRoutes = require( './routes/explore.routes')

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());  

dotenv.config();

app.get("/", (req, res) =>{
  res.send("welcome")
})

app.use("api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore/", exploreRoutes);
app.listen(5000, ()=>{
    console.log("Server runnning on port 5000");
    connectDB();
});