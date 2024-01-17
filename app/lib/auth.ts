import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
