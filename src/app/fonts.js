import { Merriweather, Source_Sans_3 } from "next/font/google";

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
