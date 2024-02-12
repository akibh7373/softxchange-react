import FeaturedIn from "@/components/FeaturedIn";
import PlatformFeaturesCard from "@/components/PlatformFeaturesCard";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>
            Stay Updated with Our Latest News <span className="br"></span> and
            Technology Advancements
          </h1>
          <p>
            Whether you&lsquo;re an investor, trader, or financial professional,
            our news provides valuable perspectives,
            <span className="br"></span> analysis, and updates to help you make
            informed decisions in today&lsquo;s dynamic markets.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="news-platform-features api-platform-features">
        <div className="container">
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="stories"
              title="SoftXchange Tech Joins Forces With The Environmental Markets Association"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories2"
              title="BEE4 Chooses SoftXchange Technologies' To Bridge Emerging Firms With Visionary Investors"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories3"
              title="SoftXchange Tech Strengthens Industry Presence As Member Of Association Of Futures Markets"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories4"
              title="TeraExchange Adopts EP3 Platform By SoftXchange Technologies To Drive Swap Execution Facility"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories5"
              title="The Limitations Of Off-The-Shelf Exchange Solutions And Why They May Not Suffice"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories6"
              title="Unlocking Success: Tried-And-Tested Strategies For An Expedited Exchange Launch"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories7"
              title="Crafting Superior Exchanges: The Crucial Role Of Our Discovery Process In Preparing For Success"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories8"
              title="SoftXchange's Jobs API: Revolutionizing Exchange Platform Software Operations"
              link="case-studies-single"
            />
            <PlatformFeaturesCard
              imgSrc="stories9"
              title="Exchange Ecosystem Unraveling The Intricacies Beneath Seemingly Simple Transactions"
              link="case-studies-single"
            />
          </div>
        </div>
      </section>
      <Contact
        headingTitle="SoftXchange Simplifying Exchange Endeavors"
        headingContent="Explore how we empowers exchange operators across diverse markets and assets."
      />
    </>
  );
}
