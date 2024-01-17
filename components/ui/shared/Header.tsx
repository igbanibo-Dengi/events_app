import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b py-5 bg-background">
      <div className="container flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.png"
            width={300}
            height={300}
            alt="logo"
          />
        </Link>

        <div className="flex w-fit items-center justify-end gap-3">
          <SignedIn>
            <nav className="md:flex hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild size={"lg"}>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
