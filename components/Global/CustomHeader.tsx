"use client";

import Link from "next/link";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslations } from "next-intl";
import { useParams, useRouter, usePathname } from "next/navigation";

export default function CustomHeader() {
  const t = useTranslations("Navbar");

  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    if (newLocale) {
      router.replace(`/${newLocale}/${pathname.slice(3)}`);
    }
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
          className="h-16 w-16"
        />
      </Link>
      <nav className="hidden gap-2 md:flex">
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#blog"
        >
          {t("blog")}
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#contacts"
        >
          {t("contacts")}
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#faq"
        >
          {t("faq")}
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#about-us"
        >
          {t("about_us")}
        </Link>
        <Link
          className="rounded-lg px-4 py-2 font-semibold hover:bg-gray-300"
          href="#search"
        >
          {t("search")}
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
            {t("blog")}
          </Link>
          <Link href="#contacts" onClick={toggleMenu}>
            {t("contacts")}
          </Link>
          <Link href="#faq" onClick={toggleMenu}>
            {t("faq")}
          </Link>
          <Link href="#about-us" onClick={toggleMenu}>
            {t("about_us")}
          </Link>
          <Link href="#search" onClick={toggleMenu}>
            {t("search")}
          </Link>
        </nav>
      )}

      <select
        className="rounded-lg px-4 py-2"
        name="lang"
        id="lang"
        onChange={handleLanguageChange}
        defaultValue="en"
      >
        <option value="en">{t("english")}</option>
        <option value="de">{t("german")}</option>
      </select>
    </header>
  );
}
