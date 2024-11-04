const passport = require("passport");
const dotenv = require("dotenv");
const GitHubStrategy = require("passport-github2");
const User = require("../models/User.model");

// Load environment variables
dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the GitHubStrategy within Passport
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ username: profile.username });
      if (!user) {
        const newUser = new User({
          name: profile.displayName,
          username: profile.username,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.photos[0].value,
          likedProfile: [],
          likedBy: [],
        });
        await newUser.save();
        done(null, newUser);
      }else{
        done(null, user);
      }
    }
  )
);
