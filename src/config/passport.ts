import passport from "passport";
import _ from "lodash";

// import { User, UserType } from '../models/User';

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
});

