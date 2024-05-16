"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 47.3775098,
        lng: 8.5335129,
      };

      // Map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "Zurich-Consulting-Office",
      };

      // Setup
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Put up a marker
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <div
      className="h-80 w-80 md:h-[600px] md:w-[600px] lg:max-h-[600px] lg:max-w-[1000px]"
      ref={mapRef}
    />
  );
}
