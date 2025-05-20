// KakaoLoginButton.tsx
"use client";

import { signIn } from "next-auth/react";

export default function KakaoLoginButton() {
  return (
    <button
      onClick={() => signIn("kakao", { callbackUrl: "/auth-redirect" })}
    >
      🟡 카카오로 로그인
    </button>
  );
}
