export type UserDocument =  {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    profile: {
        name: string;
        gender: string;
        location: string;
        website: string;
        picture: string;
    };
};