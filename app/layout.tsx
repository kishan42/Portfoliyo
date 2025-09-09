import type { Metadata, Viewport } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SocialLinks, ContactEmail } from "./data/contact";
import Script from "next/script";

const comfortaa = Comfortaa({ subsets: ["latin"] });

// SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://kishankachhadiya.com"),
  title: "Kishan Kachhadiya - Full Stack AI Engineer 👨‍💻",
  description:
    "Experienced Full-Stack AI Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, NextJS, Node.js, TypeScript, JavaScript, Python, FastAPI, MongoDB, PostgreSQL, VectorDBs, and AI frameworks such as PyTorch, TensorFlow, LangChain, and OpenAI APIs, along with AI automation tools like Zapier and Airtable.",
  keywords:
    "Kishan Kachhadiya, Full-Stack AI Engineer | Mobile & Web Developer | Product Development | Expertise in React Native, ReactJS, Next.js, Node.js, TypeScript, JavaScript, Python, FastAPI, MongoDB, PostgreSQL, and VectorDBs, with hands-on experience in AI/ML frameworks (PyTorch, TensorFlow, LangChain, OpenAI APIs) and automation tools (Zapier, Airtable).",
  robots: "index, follow",
  creator: "Kishan Kachhadiya",
  publisher: "Kishan Kachhadiya",
  authors: [
    { name: "Kishan Kachhadiya", url: "https://kishankachhadiya.com/" },
    { name: "Kishan Kachhadiya", url: "https://kishankachhadiya.com/" },
  ],
  alternates: { canonical: "https://kishankachhadiya.com" },
  openGraph: {
    title: "Srikanth Nani - Full Stack AI Engineer 👨‍💻",
    description:
      "Experienced Full-Stack AI Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, Node.js, JavaScript, Python, FastAPI, MongoDB, PostgreSQL, and AI frameworks such as PyTorch, TensorFlow, LangChain, and OpenAI APIs, along with AI automation tools like Zapier and Airtable.",
    url: "https://kishankachhadiya.com/",
    type: "website",
    locale: "en_US",
    siteName: "Kishan Kachhadiya Portfolio",
    images: [
      {
        url: "https://srikanthnani.com/site-image.png",
        alt: "Kishan Kachhadiya Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  appleWebApp: {
    title: "Kishan Kachhadiya Portfolio",
    statusBarStyle: "default",
    capable: true,
  },
  twitter: {
    title: `👋 Hello! i am Kishan Kachhadiya`,
    description:
      "Experienced Full Stack AI Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, NextJS, Node.js, MongoDB, TypeScript, JavaScript, and Python.",
    card: "summary_large_image",
    creator: "@truly_sn",
    site: "https://kishankachhadiya.com/",
    images: ["https://srikanthnani.com/site-image.png"],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract social profiles from SocialLinks
  const twitterUrl = SocialLinks.find((link) => link.includes("twitter")) || "";
  const githubUrl = SocialLinks.find((link) => link.includes("github")) || "";
  const linkedinUrl =
    SocialLinks.find((link) => link.includes("linkedin")) || "";
  const youtubeUrl = SocialLinks.find((link) => link.includes("youtube")) || "";

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kishan Kachhadiya",
              url: "https://kishankachhadiya.com",
              image: "https://srikanthnani.com/site-image.png",
              jobTitle: "Full Stack AI Engineer",
              email: ContactEmail,
              description:
                "Experienced Full-Stack AI Engineer specializing in end-to-end product development with expertise in React Native, ReactJS, Node.js, JavaScript, Python, FastAPI, MongoDB, PostgreSQL, and AI frameworks such as PyTorch, TensorFlow, LangChain, and OpenAI APIs, along with AI automation tools like Zapier and Airtable."",
              sameAs: [ githubUrl, linkedinUrl],
            }),
          }}
        />
      </head>
      <body className={`${comfortaa.className} bg-black`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
