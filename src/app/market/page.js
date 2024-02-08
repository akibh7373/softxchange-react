import React from "react";
import FeaturedIn from "@/components/FeaturedIn";
import PlatformFeaturesCard from "@/components/PlatformFeaturesCard";
import RevolutionCard from "@/components/RevolutionCard";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Integrated Market Surveillance Tools</h1>
          <p>
            This comprehensive suite offers both real-time and T+1 capabilities,
            enabling exchange operators <span className="br"></span> to identify
            anomalous trading patterns and fulfill regulatory obligations.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Instant Harnessing the Power of Real-Time Alerts</h2>
            <p>
              With this comprehensive alert system, operators can softly respond
              to emerging situations, <span className="br"></span> maintain
              market integrity, and satisfy regulatory requirements.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Insider Trading Surveillance"
              content="Insider trading is often flagged by significant price swings resulting in disproportionately large profits or avoiding substantial losses."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Front Running Detection"
              content="EP3 surveillance tools promptly alert operators to non-customer orders preceding significant customer orders."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Unusual Order Size Monitoring"
              content="Exchange operators are notified when orders significantly exceed typical account size, available capital, instrument position limits."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Unusual Order Frequency"
              content="Operators are alerted when order submission or updates exceed typical frequency for an account within a specific timeframe."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Wash Trade Monitoring"
              content="EP3 triggers alerts for trades within the same account involving two accounts sharing the same beneficial owner."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Administrator Actions Oversight"
              content="Our surveillance tools softly alert operators to administrator-initiated changes in account details, balances, and collateral adjustments."
            />
          </div>
        </div>
      </section>
      <section className="market-revolution revolution">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Leveraging End-of-Day Alerts for Informed Decision-Making</h2>
            <p>
              Aiding market surveillance with insights on price movements, order
              book balance, and trading <span className="br"></span> anomalies,
              ensuring a secure and compliant trading environment.
            </p>
          </div>
          <div className="card-wrapper">
            <RevolutionCard
              imgSrc="revolution20"
              title="Manipulative Trading Detection"
              content="SoftXchange's market surveillance tools scrutinize daily trading, detecting unusual spikes in trade volume or price volatility and pinpointing the responsible account(s)."
            />
            <RevolutionCard
              imgSrc="revolution21"
              title="Cross Trading Oversight"
              content="This daily alert mechanism aligns with SoftXchange's commitment to fostering secure and compliant trading ecosystems while bolstering the effectiveness of exchange operations."
            />
            <RevolutionCard
              imgSrc="revolution22"
              title="Spoofing Detection"
              content="By continuously monitoring trading patterns and promptly detecting any suspicious activities, We empowers exchange operators to maintain market integrity and uphold regulatory standards."
            />
            <RevolutionCard
              imgSrc="revolution23"
              title="Beneficial Ownership Data Gap Detection"
              content="This proactive approach ensures that missing information is promptly identified and rectified, maintaining compliance and transparency within the trading environment."
            />
          </div>
        </div>
      </section>
      <section className="market-platform-features api-platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Stay Updated with Our Latest News and Technology Advancements
            </h2>
            <p>
              Whether you&lsquo;re an investor, trader, or financial
              professional, our news provides valuable{" "}
              <span className="br"></span> perspectives, analysis, and updates
              to help you make informed decisions in dynamic markets.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="stories"
              title="SoftXchange Tech Joins Forces With The Environmental Markets Association"
              link="news"
            />
            <PlatformFeaturesCard
              imgSrc="stories2"
              title="BEE4 Chooses SoftXchange Technologies' To Bridge Emerging Firms With Visionary Investors"
              link="news"
            />
            <PlatformFeaturesCard
              imgSrc="stories3"
              title="SoftXchange Tech Strengthens Industry Presence As Member Of Association Of Futures Markets"
              link="news"
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
