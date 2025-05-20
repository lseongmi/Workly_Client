// app/auth-redirect/page.tsx
"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthRedirectPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.accessToken) {
      router.replace("/");
    }
  }, [status, session, router]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>로그인 처리 중...</h2>
    </div>
  );
}
