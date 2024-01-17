"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../button";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      <Link href='/' className={`whitespace-nowrap ${pathname === '/' && 'text-primary'}`}>Home</Link>
      <Link href='/profile' className={`whitespace-nowrap ${pathname === '/profile' && 'text-primary'}`}>My Events</Link>
      <Button asChild variant="outline" className={`whitespace-nowrap bg-primary hover:bg-primary/80 hover:text-white text-white ${pathname === '/profile' && 'hidden'}`}>
        <Link href='/events/create'>Create Event</Link>
      </Button>
    </div>
  );
};

export default NavItems;
