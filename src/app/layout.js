import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Biiig Stretch Studio | Design-Minded Web Development",
  description:
    "A purposefully small design-minded development studio based in the heart of the Pacific Wonderland.",
  keywords:
    "Web design, web development, website design, website development, web studio, portland web design, portland web development, portland oregon web design, portland oregon web development, full stack development, frontend development, headless development, marketing sites, landing pages, webmaster services, web consulting, technical seo, next.js, react, vue.js, nuxt.js, sanity cms, vercel, figma, tailwind, html, css, javascript, typescript, graphql",
  openGraph: {
    title: "Biiig Stretch Studio | Design-Minded Web Development",
    description:
      "A purposefully small design-minded development studio based in the heart of the Pacific Wonderland.",
    siteName: "Biiig Stretch Studio",
    type: "website",
    locale: "en_US",
    url: "https://biiigstretch.studio/",
    images: [
      {
        url: "https://biiigstretch.studio/og-image.png",
        alt: "Biiig Stretch Studio",
      },
    ],
  },
  images: [
    {
      url: "https://biiigstretch.studio/og-image.png",
      alt: "Biiig Stretch Studio",
    },
  ],
};

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`lowercase ${hanken.className}`}>
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-SWWMF86L6D" />
    </html>
  );
}
