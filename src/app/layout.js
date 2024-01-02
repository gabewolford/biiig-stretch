import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Biiig Stretch Studio | Design-Minded Web Development",
  description:
    "A purposefully small design-minded development studio based in the heart of the Pacific Wonderland.",
  icons: {
    icon: "/square-icon.png",
  },
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
        url: "https://biiigstretch.studio/images/square-icon.png",
        alt: "Biiig Stretch Studio",
      },
    ],
  },
  images: [
    {
      url: "https://biiigstretch.studio/images/square-icon.png",
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
    </html>
  );
}
