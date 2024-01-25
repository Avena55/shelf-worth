"use client";

import { signIn } from "next-auth/react";

export default function GetStartedButton() {
  return (
    <button className="btn" onClick={() => signIn()}>
      Get Started
    </button>
  );
}
