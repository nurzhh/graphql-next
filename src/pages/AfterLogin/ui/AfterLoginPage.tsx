"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AfterLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the AfterLogin page!</h1>
    </div>
  );
}
