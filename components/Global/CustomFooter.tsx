import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CustomFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/logo.svg"
            className="invert filter"
            alt="Logo"
            width={150}
            height={50}
          />
        </div>
        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <div>
            <Link href="/privacy-policy">{t("privacy")}</Link>
          </div>
          <div>
            <Link href="/terms-of-use">{t("terms")}</Link>
          </div>
        </div>
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <p>{t("phone")}: (123) 456-7890</p>
        </div>
        {/* All Rights Reserved */}
        <div className="text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Switzerland Consulting. {t("all_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
