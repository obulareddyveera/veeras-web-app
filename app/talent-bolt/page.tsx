"use client";
import React from "react";
import VoiceWidget from "../components/voice-widget";

export default function NavbarAvatar() {
  return (
    <>
      <div className="relative mx-auto bg-indigo-50 py-6">
        <div className="mx-auto flex flex-col px-4 sm:max-w-xl md:h-fit md:max-w-screen-xl">
          <VoiceWidget />
        </div>
      </div>
    </>
  );
}
