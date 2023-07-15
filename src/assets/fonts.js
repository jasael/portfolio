import { Inconsolata, Space_Mono } from "next/font/google";

export const inconsolata = Inconsolata({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const space_mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});
