"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

export default function DelayedPopup() {
  const t = useTranslations("Popup");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("popupShown")) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <Popup
        open={open}
        closeOnDocumentClick={false}
        onClose={() => setOpen(false)}
      >
        <div className="relative mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <div className="mb-4 p-5 text-lg font-semibold">{t("welcome")}</div>
          <div className="grid gap-2 text-gray-700">
            <p>{t("info")}</p>
            <button
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
              onClick={() => setOpen(false)}
            >
              {t("accept_all")}
            </button>
            <button
              className="rounded-lg bg-gray-300 px-4 py-2"
              onClick={() => setOpen(false)}
            >
              {t("only_necessary")}
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
