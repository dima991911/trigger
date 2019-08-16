import * as jsonwebtoken from 'jsonwebtoken';
import * as koaJwt from 'koa-jwt';
import * as passport from 'koa-passport';
import * as FacebookStrategy from 'passport-facebook-token';
import * as InstagramStrategy from 'passport-instagram-token';


import config from '../config';


const { secret } = config.jwt;

export default koaJwt({secret});

export function signJWT(data) {
  return jsonwebtoken.sign({
    data: data,
    //exp in seconds
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // 1 week
  }, secret);
}


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: config.social.facebook.clientID,
    clientSecret: config.social.facebook.clientSecret,
    fbGraphVersion: 'v3.0',
    callbackURL: "/api/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    scope: [ "email", "public_profile"],
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(undefined, {...profile._json, accessToken});
  }
));

passport.use(new InstagramStrategy({
  clientID: config.social.instagram.clientID,
  clientSecret: config.social.instagram.clientSecret,
}, function(accessToken, refreshToken, profile, cb) {
  cb(undefined, {...profile._json, accessToken});
}));

export const facebookPassport = passport.authenticate('facebook-token', { session: false});
export const instagramPassport = passport.authenticate('instagram-token', { session: false});
