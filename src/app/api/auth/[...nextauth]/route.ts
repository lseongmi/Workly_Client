import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { JWT } from "next-auth/jwt";

export const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // 비밀키 설정 (JWT 토큰 암호화)
  callbacks: {
    // jwt 콜백에서 'token'과 'user'에 타입을 지정합니다.
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        // 카카오에서 받은 accessToken을 JWT 토큰에 저장
        token.accessToken = user.accessToken;
      }
      return token;
    },
    
    // session 콜백에서 'session'과 'token'에 타입을 지정합니다.
    async session({ session, token }: { session: Session; token: JWT }) {
      // 세션에 accessToken 추가
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
        
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
