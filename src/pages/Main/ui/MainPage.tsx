"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";
import { LoginForm } from "@/features/auth/login";

export default function MainPage() {
  const router = useRouter();
  const { access_token } = useAuthStore((state) => state);

  useEffect(() => {
    if (access_token || localStorage.getItem("access_token")) {
      router.push("/afterlogin");
    }
  }, [access_token, router]);

  return (
    <section className="">
      <LoginForm />
    </section>
  );
}
