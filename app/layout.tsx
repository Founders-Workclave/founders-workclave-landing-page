import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const GTM_ID = "GTM-KD3KRJNZ";

export const metadata: Metadata = {
  title: {
    default: "Build Your Product with AI",
    template:
      "Turn your idea into a real product. Get an AI-generated PRD, collaborate with expert developers, and launch your MVP — no technical skills needed.",
  },
  description: "Welcome to Founders Workclave",
  metadataBase: new URL("https://foundersworkclave.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Founders Workclave",
    url: "https://foundersworkclave.com",
    title: "Founders Workclave",
    description: "Welcome to Founders Workclave",
    images: [
      {
        url: "https://foundersworkclave.com/assets/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Founders Workclave",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Workclave",
    description: "Welcome to Founders Workclave",
    images: ["https://foundersworkclave.com/assets/logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${interSans.variable} antialiased`}>
        {/* GTM NoScript fallback — immediately after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Schema: Organization */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Founders Workclave",
            url: "https://foundersworkclave.com",
            logo: "https://foundersworkclave.com/assets/logo-new.png",
            parentOrganization: {
              "@type": "Organization",
              name: "Rebot Business Solutions Ltd.",
              address: { "@type": "PostalAddress", addressCountry: "NG" },
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "hello@foundersworkclave.com",
            },
            sameAs: [
              "https://www.linkedin.com/showcase/founders-workclave/",
              "https://x.com/workclave",
              "https://youtube.com/@foundersworkclave",
            ],
          })}
        </Script>

        {/* Schema: WebSite */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Founders Workclave",
            url: "https://foundersworkclave.com",
          })}
        </Script>

        {/* Schema: SoftwareApplication */}
        <Script
          id="schema-software"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Founders Workclave",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            url: "https://foundersworkclave.com",
          })}
        </Script>
      </body>
    </html>
  );
}
