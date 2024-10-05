import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23li3EZWvgLfCEa270",
      clientSecret: "a4406d33f32839ec5e353a602c5f8c1d45ec784f",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
