import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Carbon Wheelsets | Velocity Wheels",
  description: "Hand-built custom and pre-built carbon wheelsets for track cycling and road racing. Precision engineering, premium materials, expert craftsmanship.",
  keywords: "carbon wheelsets, track wheels, custom wheelbuilding, cycling wheels, track cycling",
  openGraph: {
    title: "Premium Carbon Wheelsets Built for Speed | Velocity Wheels",
    description: "Expert wheelbuilding craftsmanship. Custom carbon wheelsets optimized for track sprint, pursuit, and road racing.",
    siteName: "Velocity Wheels",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${raleway.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}