import React from "react";
import FeaturedIn from "@/components/FeaturedIn";
import PlatformFeaturesCard from "@/components/PlatformFeaturesCard";
import Services from "@/components/Services";
import RevolutionCard from "@/components/RevolutionCard";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>
            Trade Matching Engine Redefined <span className="br"></span> with
            Advanced Features
          </h1>
          <p>
            We utilizes micro services and cutting-edge containerization tech
            for seamless setup, <span className="br"></span> efficient launch,
            and uninterrupted operation.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Unveiling a Spectrum of Possibilities through Our Platform
              Features
            </h2>
            <p>
              Crafted by traders, powered by capital markets experts.
              EP3&lsquo;s platform and matching engine{" "}
              <span className="br"></span> empower exchanges to launch softly
              and affordably.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform"
              title="High-Performance Matching"
              content="Optimized for Peak Performance Matching Engine Achieves Sub-8 Microsecond Latency and 120,000 Orders per Second"
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Discovery With Asset Agnosticism"
              content="SoftXchange Embraces Asset Agnosticism for Inclusive Trading and Enhanced Price Discovery"
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Continuous Availability Through"
              content="Incorporates a robust self-healing mechanism that guarantees uninterrupted order flow even in the event of a matching."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Enhanced User Experiences"
              content="Enhance the end-user experience by incorporating unique user interfaces and seamlessly integrating with applications."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Enhanced Performance"
              content="Utilizing cutting-edge technologies such the matching engine exhibits rapid responsiveness to surges in market activity."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Adaptable Deployment Options"
              content="EP3 is versatile in deployment, offering options for cloud, hybrid-cloud, and on-premises environments."
            />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="heading-wrapper">
            <h2 className="heading-title">
              Elevate Your Strategy with Our Expert Complementary Services
            </h2>
            <p className="heading-subtitle">
              We envision empowering your aspirations, orchestrating a
              comprehensive transformation <span className="br"></span> that
              fuels your success in a dynamic market.
            </p>
          </div>
          <div className="services-wrapper">
            <Services
              imgSrc="services-img3"
              title="Excellence Through Professional Services"
              content="Unlock exceptional potential elevate your EP3 platform with tailored
                enhancements. Our custom Software development services drive
                operational and business excellence."
              link="professional-services"
            />
            <Services
              imgSrc="services-img4"
              title="Growth Through Dedicated Support Services"
              content="Our team of experts is dedicated to ensuring your platform's
                seamless performance, offering soft resolutions and innovative
                solutions to any challenges that may arise."
              link="support-services"
            />
          </div>
        </div>
      </section>
      <section className="features-revolution revolution">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Revolutionizing Success for Organizations of Every Scale</h2>
            <p>
              Discover how we empowers exchanges to chart their course, compete
              on a global scale, <span className="br"></span> and redefine the
              landscape of trading.
            </p>
          </div>
          <div className="card-wrapper">
            <RevolutionCard
              imgSrc="revolution5"
              title="Trade Matching"
              content="We standard order matching employs a price-time priority
                algorithm, with the flexibility to integrate other matching
                algorithms as needed."
            />
            <RevolutionCard
              imgSrc="revolution6"
              title="Risk Assessment"
              content="We offers robust pre-trade risk checks, covering price limits,
                order sizes, self-trade protections, user validation, and
                financial controls."
            />
            <RevolutionCard
              imgSrc="revolution7"
              title="Diverse Mechanisms"
              content="We caters to customers seeking order matching beyond a central
                limit order book (CLOB) with Request for Quote (RFQ) and Auction
                workflows."
            />
            <RevolutionCard
              imgSrc="revolution8"
              title="Market Oversight"
              content="We extends its functionality to enable exchange operators to
                detect and address market activity that poses a risk to the
                exchange's integrity."
            />
            <RevolutionCard
              imgSrc="revolution9"
              title="Operational Oversight"
              content="We provides exchange operators with insights into their platform's health, allowing them to proactively resolve issues before they affect the market."
            />
            <RevolutionCard
              imgSrc="revolution8"
              title="Infrastructure Management"
              content="Admin UI empowers exchange operators with market management, configuration, monitoring, auditing, and reporting functionalities."
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
