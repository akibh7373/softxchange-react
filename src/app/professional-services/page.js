import React from "react";
import Image from "next/image";
import FeaturedIn from "@/components/FeaturedIn";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Your Path to Professional Solutions</h1>
          <p>
            Unlock unparalleled capital market expertise with our professional
            services. Benefit from seasoned <span className="br"></span> experts
            guiding your financial endeavors.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Enhancing Your Exchange with Tailored Solutions and Expertise
            </h2>
            <p>
              We delivers robust functionality, reliability, and scalability for
              exchanges. However, <span className="br"></span> our experienced
              team can help you customize features to meet specific asset class.
            </p>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg3.jpg"
                  alt="performance bg"
                />
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>
                Customized Solutions for Diverse Asset
                <span className="br"></span> Classes and Regulatory Needs
              </h3>
              <p>
                Unlock the advantages of collaborating with seasoned capital
                market technology experts. They&lsquo;ll craft customized
                functionalities to enhance the standard we exchange platform and
                matching engine, ensuring tailored solutions for your unique
                needs.
              </p>
            </div>
          </div>
          <div className="performance-wrapper-bottom">
            <div className="performance-wrap performance-left">
              <h3>Harness the Potential of Personalization</h3>
              <p>
                Partner with Our Expert Team to Transform Your Vision into
                Reality. Our Collaborative Approach Allows for the Development
                of Tailored Features That Align with Your Unique Requirements,
                Enabling the Creation of the Optimal Exchange for Your Market.
                With Our Custom Solutions, You Gain a Competitive Edge, Ensuring
                Smooth Regulatory Compliance and Optimized Performance for Your
                Specific Asset Class.
              </p>
            </div>
            <div className="performance-wrap performance-right">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg4.jpg"
                  alt="performance bg"
                />
              </div>
            </div>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg5.jpg"
                  alt="performance bg"
                />
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>
                Guiding You to Unprecedented Success
                <span className="br"></span>
                with Expertise
              </h3>
              <p>
                Partner with Our Dedicated Capital Market Technology Experts for
                Your Success. Our Team&lsquo;s Knowledge and Experience Address
                the Intricacies of Capital Markets, Empowering You to Thrive in
                a Competitive Industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="timeline performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>The Path of the Customer</h2>
            <p>
              Discover the Key Elements of SoftXchange
              &lsquo;Technologies&lsquo; Process
              <span className="br"></span> and Their Role in Achieving Success.
            </p>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>1</span>
              </div>
              <h3>Qualification</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Assess fit for both sides
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Sign NDA
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Demo
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Gather high level requirements
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discuss Pricing
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>2</span>
              </div>
              <h3>Discovery</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                We Prepares details report covering all requirements
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Includes diagrams, recommendations, and gap analysis
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>3</span>
              </div>
              <h3>Implementation</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Training/Onboarding
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Testing Environment
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Custom Development
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Exchange operational handoff
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Pre-production support
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-numb">
                <span>4</span>
              </div>
              <h3>Production</h3>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Dedicated account manager
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Customized support model
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Product updates
              </span>
            </div>
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
