// src/app/layout.tsx
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import type { Metadata } from "next";
import "../app/styles/globals.css";
import Nav from "./components/common/nav-bar";
import FooterWrapper from "./components/common/footer-wrapper";

// 메타데이터 정의
export const metadata: Metadata = {
  title: "Workly",
  description: "Website for young professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 클라이언트 사이드에서만 SessionProvider로 감싸기 */}
        <SessionProvider>{children}</SessionProvider>
        <Nav />
        <FooterWrapper />
      </body>
    </html>
  );
}
