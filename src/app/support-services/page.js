import React from "react";
import Image from "next/image";
import FeaturedIn from "@/components/FeaturedIn";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Accessible Support Services for Your Convenience</h1>
          <p>
            Reliable 24/7 Technical Support Our team of SoftXchange experts is
            just a call away, ensuring Soft <span className="br"></span> issue
            resolution with a deep understanding of your capital market needs.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>SoftXchange Your Reliable Support System</h2>
            <p>
              Your 24/7 Lifeline for EP3 Support. Connect directly with our
              capital market experts <span className="br"></span>for soft issue
              resolution.
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
              <h3>Always Available 24/7 Technical Support</h3>
              <p>
                At SoftXchange, we understand that the world of financial
                exchanges operates around the clock, and so should our support
                services. Our 24/7 Technical Support is more than just a
                helpline; it&lsquo;s your lifeline to uninterrupted operations.
                When you encounter an issue, there&lsquo;s no need to fret about
                downtime or delays. Our dedicated team of experts, intimately
                familiar with the ins and outs of EP3, the heart of our exchange
                platform, is ready to assist you around the clock.
              </p>
              <p>
                You won&lsquo;t be talking to generic customer service agents;
                you&lsquo;ll be in direct contact with the very individuals who
                played a pivotal role in crafting EP3. This direct line of
                communication ensures that your challenges are understood and
                resolved with the precision and urgency they deserve. With
                SoftXchange&lsquo;s 24/7 Technical Support, you can navigate the
                intricate landscape of financial markets with confidence,
                knowing that a reliable partner has your back, day or night.
              </p>
            </div>
          </div>
          <div className="performance-wrapper-bottom">
            <div className="performance-wrap performance-left">
              <h3>
                Direct Access to Experts Tailored Solutions and Expert Guidance
              </h3>
              <p>
                Unlock the full potential of EP3 with direct access to our team
                of experts. When you partner with SoftXchange, you gain
                personalized guidance from professionals who intimately
                understand the intricacies of EP3&lsquo;s advanced technology.
              </p>
              <p>
                Our experts provide tailored solutions and expert guidance,
                ensuring your questions are addressed with the utmost expertise
                and precision. With our dedicated support, you&lsquo;ll never
                feel lost or disconnected. We speak your language and are
                committed to solving your challenges efficiently, helping you
                make the most of your EP3 experience.
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
