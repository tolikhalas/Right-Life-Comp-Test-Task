"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function CustomHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between gap-12">
      <Link
        href="/"
        className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
      >
        <Image
          width={64}
          height={64}
          src="/logo.svg"
          alt="Switzerland Consulting Logo"
        />
      </Link>
      <nav className="hidden gap-2 md:flex">
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#blog"
        >
          Blog
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#contacts"
        >
          Contacts
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#faq"
        >
          FAQ
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#about-us"
        >
          About us
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#search"
        >
          Search
        </Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <MenuIcon />
        </button>
      </div>
      {menuOpen && (
        <nav
          className="absolute left-0 top-0 z-[999] flex h-screen w-full flex-col items-center justify-center gap-8 bg-white md:hidden"
          onClick={toggleMenu}
        >
          <Link href="#blog" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="#contacts" onClick={toggleMenu}>
            Contacts
          </Link>
          <Link href="#faq" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link href="#about-us" onClick={toggleMenu}>
            About us
          </Link>
          <Link href="#search" onClick={toggleMenu}>
            Search
          </Link>
        </nav>
      )}
    </header>
  );
}
