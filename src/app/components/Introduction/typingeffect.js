"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingEffect() {
  return (
    <TypeAnimation
      sequence={["AI Engineer", 1000, "Fullstack Developer", 1000]}
      speed={50}
      repeat={Infinity}
    />
  );
}
