import { AuthOptions, Awaitable, RequestInternal, User } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { users } from "./users";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      authorize: function (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
        if (!credentials?.email || !credentials?.password) return null;
        
        // all below it's a shit, you need change this with some proper code  
        const currentUser = users.find( user => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
}