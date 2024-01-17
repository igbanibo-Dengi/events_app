"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const guestUsername = "guest";
  const guestPassword = "teeketly";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-[url('/auth-2.jpg')]">
      <main >
        {children}

        <div className="text-white font-semibold text-center md:flex flex-col gap-3 hidden items-center">
          <h3 className="w-full pr-10">Demo Account</h3>
          <span className="flex items-center gap-3">
            <p>username</p>
            {/* <p>guest </p> */}
            <Button
              variant={"ghost"}
              onClick={() => navigator.clipboard.writeText(guestUsername)}
            >
              <Copy size={16} />
            </Button>
          </span>
          <span className="flex items-center gap-3">
            <p>password</p>
            {/* <p>teeketly </p> */}
            <Button
              variant={"ghost"}
              onClick={() => navigator.clipboard.writeText(guestPassword)}
            >
              <Copy size={16} />
            </Button>
          </span>
        </div>
      </main>
    </div>
  );
}
