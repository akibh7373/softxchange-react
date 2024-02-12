import FeaturedIn from "@/components/FeaturedIn";
import RevolutionCard from "@/components/RevolutionCard";
import PlatformFeaturesCard from "@/components/PlatformFeaturesCard";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>
            Enhance Your Exchange Platform and Trade
            <span className="br"></span> Matching Engine Software&apos;s
            Capabilities
          </h1>
          <p>
            SoftXchange&apos;s platform and matching engine offer
            industry-standard APIs <span className="br"></span> for seamless
            integration with third-party trading applications.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="api-revolution revolution">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Effortless Workflow Integration Seamlessly Aligning with Your
              Systems
            </h2>
            <p>
              We offers developer-friendly APIs for exchange operators to create
              applications and integrate <span className="br"></span>{" "}
              third-party services for Market Access, Exchange Administration,
              and Post-Trade processes.
            </p>
          </div>
          <div className="card-wrapper">
            <RevolutionCard
              imgSrc="revolution11"
              title="Binary Market Access Interface"
              content="Binary Market Access API unlocks trading capabilities, ensuring the quickest possible market access to the trade matching engine latency."
            />
            <RevolutionCard
              imgSrc="revolution12"
              title="RESTful Market Access Interface"
              content="Leverage the REST Market Access API for rapid order management in our trade matching engine, ensuring a soft time-to-market solution."
            />
            <RevolutionCard
              imgSrc="revolution13"
              title="Financial Information EXchange"
              content="Enhance Exchange Access: Link Third-Party Systems, Market Data, and Clients with FIX Protocol Standards."
            />
            <RevolutionCard
              imgSrc="revolution14"
              title="Administrative Exchange API"
              content="Develop applications for workflow automation, advanced tasks like instrument creation, seamless integration with your existing tools and platforms."
            />
            <RevolutionCard
              imgSrc="revolution15"
              title="Clearing Firm Administrative API"
              content="Enable exchange operators to grant clearing firms access to manage and update customer-specific information efficiently."
            />
            <RevolutionCard
              imgSrc="revolution16"
              title="Contribution Interface API"
              content="Leverage the REST Market Access API for rapid order management in our trade matching engine, ensuring a soft time-to-market solution."
            />
            <RevolutionCard
              imgSrc="revolution17"
              title="FIX Drop-Copy Interface API"
              content="Receive real-time order status updates from the trade matching engine via FIX Drop-copy API. Stay informed instantly."
            />
            <RevolutionCard
              imgSrc="revolution18"
              title="Surveillance Monitoring API"
              content="These APIs seamlessly integrate exchanges with third-party or in-house market surveillance systems."
            />
            <RevolutionCard
              imgSrc="revolution19"
              title="Clearing And Settlement Interface API"
              content="Facilitate back-office trade clearing and settlement workflows, offering real-time and on-demand support with the Clearing and Settlement API."
            />
          </div>
        </div>
      </section>
      <section className="api-platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Comprehensive Look at Third-Party Integrations</h2>
            <p>
              We effortlessly integrates with industry-leading third-party
              platforms for Market Surveillance, <span className="br"></span>{" "}
              Trade Clearance, and Order Entry, enhancing operational
              efficiency.
            </p>
          </div>
          <div className="platform-heading-wrapper">
            <h3>Surveillance System Integrations</h3>
            <p>
              Accelerate your journey to the first trade with our Market
              Surveillance API, integrating our seamlessly
              <span className="br"></span> with top market surveillance
              platforms.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform2"
              title="Eventus"
              content="Eventus is a leading global provider of multi-asset class trade surveillance and market risk solutions."
            />
            <PlatformFeaturesCard
              imgSrc="platform3"
              title="National Futures Association"
              content="National Futures Association is the industrywide, self-regulatory organization for the U.S. derivatives industry."
            />
          </div>
          <div className="platform-heading-wrapper">
            <h3>Clearing and Settlement System Integrations</h3>
            <p>
              EP3 provides integrations with premier clearing houses for
              efficient clearing and settlement <span className="br"></span> of
              swaps, futures, and futures options.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform4"
              title="London Clearing House"
              content="Our multi-asset offering and world-class risk management capabilities have positioned LCH as a leading central counterparts."
            />
            <PlatformFeaturesCard
              imgSrc="platform5"
              title="CME Group"
              content="We meet uncertainty and volatility with confidence and clarity, across the trading lifecycle and around the world."
            />
            <PlatformFeaturesCard
              imgSrc="platform6"
              title="The Minneapolis Grain Exchange"
              content="MGEX has been the principal market for Hard Red Spring Wheat (HRSW) – first as a cash market, then futures and options."
            />
          </div>
          <div className="platform-heading-wrapper">
            <h3>Seamless Order Entry Platform Integrations</h3>
            <p>
              By aligning with these platforms, you gain the competitive edge of
              efficient order execution, real-time
              <span className="br"></span> insights, and the flexibility to
              adapt to evolving market conditions.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform7"
              title="CQG"
              content="Our mission is to create innovative solutions for the financial trading industry. CQG's innovations have become industry standards."
            />
            <PlatformFeaturesCard
              imgSrc="platform8"
              title="Quick Suite Trading"
              content="We offer a complete suite of multi-asset trading technology solutions, to manage the entire trading life cycle."
            />
          </div>
          <div className="platform-heading-wrapper">
            <h3>Regulatory Reporting System Integrations</h3>
            <p>
              Unlock regulatory compliance with the seamless integration of our
              exchange platform and trade matching <span className="br"></span>{" "}
              engine with regulatory reporting agencies.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform9"
              title="Commodity Futures Trading Commission"
              content="The Commodity Futures Trading Commission's mission is to integrity and vitality of U.S. markets through regulation."
            />
            <PlatformFeaturesCard
              imgSrc="platform10"
              title="Depository Trust &amp; Clearing Corporation"
              content="We were built in partnership with the industry to provide stability and efficiency in the global capital markets."
            />
          </div>
          <div className="platform-heading-wrapper">
            <h3>Pre-Trade Risk Management System Integrations</h3>
            <p>
              Elevate risk management by integrating EP3 with top-tier pre-trade
              risk solutions, ensuring compliance <span className="br"></span>{" "}
              and informed decision-making in real-time.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform11"
              title="Traiana"
              content="Traiana’s network is comprised of the global financial community’s leading voices providing insight, thought connectivity."
            />
          </div>
        </div>
      </section>
      <section className="stories">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Real-World Success Stories Unveiling the Impact of Our Solutions
            </h2>
            <p>
              Discover the tangible outcomes of our solutions through real-world
              success stories<span className="br"></span> that showcase our
              impact in action.
            </p>
          </div>
          <div className="stories-wrapper">
            <Stories
              imgSrc="success-stories"
              title="Shaping the Financial Landscape: Unveiling the American Financial Exchange"
              content="This case study unveils a narrative of collaboration, innovation, and the power of a strategic partnership that has empowered American Financial Exchange to navigate challenges, drive efficiency, and achieve remarkable outcomes in the financial landscape."
              link="case-studies-single"
            />
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <Stories
              imgSrc="success-stories2"
              title="Navigating Success: Unveiling the Triumph of APAC Bourse's On-Prem Exchange Platform"
              content="Discover how APAC Bourse leveraged cutting-edge innovations to navigate challenges, capitalize on opportunities, and drive unprecedented growth in the exchange landscape. The power of partnership, innovation, and the on achieving remarkable outcomes."
              link="case-studies-single"
            />
          </div>
        </div>
      </section>
      <Contact
        headingTitle="Require a custom integration not found on our list?"
        headingContent="Reach out to our Professional Services team, and we'll build a tailored integration for your platform."
      />
    </>
  );
}
