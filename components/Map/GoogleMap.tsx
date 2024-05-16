import React from "react";
import { Map } from "./Map";

export default function GoogleMap() {
  return (
    <div className="flex w-full items-center justify-center bg-gray-300 px-4 py-10 md:p-20">
      <div className="grid gap-4">
        <h2 className="text-center text-xl font-semibold">How to find us</h2>
        <Map />
      </div>
    </div>
  );
}
