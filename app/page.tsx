import type { Metadata } from "next";
import Script from "next/script";
import AboutFounders from "@/components/about";
import FaqFounder from "@/components/faqFounder";
import Features from "@/components/featuresFounder";
import Footer from "@/components/footer";
import FounderHero from "@/components/founderHero";
import Header from "@/components/header";
import HowItWorks from "@/components/howitworks";
import Others from "@/components/others";
import ProductCycle from "@/components/productCycle";
import { FAQ_SCHEMA } from "@/utils/data";

export const metadata: Metadata = {
  title: "Build Your Product with AI",
  description:
    "Turn your idea into a real product. Get an AI-generated PRD, collaborate with expert developers, and launch your MVP — no technical skills needed.",
  alternates: {
    canonical: "https://foundersworkclave.com",
  },
  openGraph: {
    url: "https://foundersworkclave.com",
    title: "Build Your Product with AI | Founders Workclave",
    description:
      "Turn your idea into a real product — AI-generated PRD, expert developers, and a clear path to launch.",
    images: [
      {
        url: "https://foundersworkclave.com/assets/agencyHero.png",
        width: 1200,
        height: 630,
        alt: "Founders Workclave",
      },
    ],
  },
};

const Founders = () => {
  return (
    <div>
      <Header />
      <FounderHero />
      <AboutFounders />
      <ProductCycle />
      <HowItWorks />
      <Features />
      <Others />
      <FaqFounder />
      <Footer />

      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(FAQ_SCHEMA)}
      </Script>
    </div>
  );
};

export default Founders;
