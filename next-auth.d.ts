import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string; // Add the custom field here
  }

  interface JWT {
    id: string; // Add the custom field to the token
  }
}
