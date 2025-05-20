"use client";

import { signIn } from "next-auth/react";

export default function KakaoLoginButton() {
  const handleLogin = () => {
    signIn("kakao");
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: "#FEE500",
        color: "#3C1E1E",
        padding: "10px 20px",
        borderRadius: "8px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
      }}
    >
      🟡 카카오로 로그인
    </button>
  );
}
