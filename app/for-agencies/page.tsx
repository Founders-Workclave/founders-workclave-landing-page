import AboutAgencies from "@/components/aboutAgencies";
import AgencyHero from "@/components/agenciesHero/page";
import FaqAgencies from "@/components/faqAgencies/page";
import FeaturesAgency from "@/components/featuresAgencies";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeadingAgencies from "@/components/leadingAgencies";
import Pricing from "@/components/pricing";
import WorksAgency from "@/components/worksAgency";
import Head from "next/head";

const Agencies = () => {
  return (
    <div>
      <Head>
        <title>Agency Client & Project Management</title>
        <meta
          name="description"
          content="Manage client projects, deliverables, and milestones in one platform. Built for software agencies who need clarity, collaboration, and control."
        />
        <link rel="canonical" href="https://foundersworkclave.com" />
        <meta property="og:url" content="https://foundersworkclave.com" />
        <meta
          property="og:title"
          content="Agency Client & Project Management | Founders Workclave"
        />
        <meta
          property="og:description"
          content="Manage client projects, deliverables, and milestones in one platform. Built for software agencies who need clarity, collaboration, and control."
        />
        <meta
          property="og:image"
          content="https://foundersworkclave.com/public/assets/agencyHero.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Header />
      <AgencyHero />
      <LeadingAgencies />
      <AboutAgencies />
      <FeaturesAgency />
      <WorksAgency />
      <Pricing />
      <FaqAgencies />
      <Footer />
    </div>
  );
};

export default Agencies;
