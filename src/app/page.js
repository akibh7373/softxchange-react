import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedIn from "@/components/FeaturedIn";
import PlatformFeaturesCard from "@/components/PlatformFeaturesCard";
import RevolutionCard from "@/components/RevolutionCard";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <h1>
              Empowering Financial <span className="br"></span> Innovation
              Through
              <span className="br"></span> Expert Technology
            </h1>
            <p className="hero-subtitle">
              Our relentless commitment to pioneering technology drives
              <span className="br"></span> us to engineer cutting-edge platforms
              that redefine the future <span className="br"></span> of financial
              markets.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="#" className="btn btn-secondary">
              Watch Overview
            </Link>
          </div>
          <div className="hero-right">
            <div className="hero-right-top">
              <span className="top">AAPL</span>
              <h6>Apple Inc</h6>
              <p className="hero-right-subtitle">
                <span>
                  <Image
                    width={16}
                    height={10}
                    src="/img/right-icon.svg"
                    alt="right-icon-svg"
                  />
                  May 1, 2023
                </span>
                <span>
                  <Image
                    width={16}
                    height={16}
                    src="/img/reverse-icon.svg"
                    alt="reverse-icon-svg"
                  />
                  Threshold: 10%
                </span>
                <span>
                  <Image
                    width={16}
                    height={16}
                    src="/img/user.svg"
                    alt="user svg"
                  />
                  Composer
                </span>
              </p>
            </div>
            <div className="chart-hero"></div>
            <div className="hero-right-bottom">
              <div className="hero-right-wrapper">
                <div className="hero-right-inner">
                  <p>Portfolio Value</p>
                  <span>$2652.00</span>
                </div>
                <div className="hero-right-inner">
                  <p>Today’s $ Change</p>
                  <span className="amount">+$2652.00</span>
                </div>
              </div>
              <div className="hero-right-wrapper">
                <div className="hero-right-inner">
                  <p>Cumulative Return</p>
                  <span>40.10%</span>
                </div>
                <div className="hero-right-inner">
                  <p>Today’s % Change</p>
                  <span className="amount">+2652.00%</span>
                </div>
              </div>
            </div>
          </div>
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
              Crafted by traders, powered by capital markets experts. EP3&apos;s
              platform and matching engine <span className="br"></span> empower
              exchanges to launch softly and affordably.
            </p>
          </div>
          <div className="card-wrapper">
            <PlatformFeaturesCard
              imgSrc="platform"
              title="High-Speed Trading Engine"
              content="Experience lightning-fast trades and executions, ensuring you're
                always ahead of market movements."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Intelligent Matching Algorithm"
              content="Our sophisticated algorithm optimizes order matching, enhancing
                liquidity and minimizing slippage."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Scalability & Flexibility"
              content="Seamlessly scale your operations and adapt to changing market
                demands without compromising performance."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Robust Security Measures"
              content="Your assets are protected with state-of-the-art security
                protocols, multi-factor authentication, and encryption."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Real-time Market Data"
              content="Access accurate and up-to-the-second market data for informed
                decision-making and strategy development."
            />
            <PlatformFeaturesCard
              imgSrc="platform"
              title="Continuous Innovation"
              content="Benefit from ongoing updates and enhancements as we continually
                evolve our platform to meet your trading needs."
            />
          </div>
        </div>
      </section>
      <section className="performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Redefining Agility and Performance in Every Market Move</h2>
            <p>
              Our vision is to embolden both emerging and established exchanges,
              guiding them towards <span className="br"></span> a future where
              speed and efficiency are the cornerstones of success.
            </p>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg.jpg"
                  alt="performance bg"
                />
              </div>
              <div className="overlay">
                <h4>Performance Metrix</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>P/E Ratio</th>
                      <th>Dividend Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apple Inc</td>
                      <td>31.42</td>
                      <td>0.51%</td>
                    </tr>
                    <tr>
                      <td>NVIDIA Corp</td>
                      <td>119.40</td>
                      <td>0.03%</td>
                    </tr>
                    <tr>
                      <td>Tesla Inc</td>
                      <td>72.74</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>Diverse Markets and Versatile Trading</h3>
              <p>
                Enabling all market varieties and trading landscapes from
                emerging marketplaces to established regulated exchanges.
              </p>
              <div className="li-wrap">
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Designated Contract Markets (DCM)
                </span>
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />{" "}
                  Swap Execution Facilities (SEF)
                </span>
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Alternative Trading Systems (ATS)
                </span>
                <span className="performance-li performance-li-last">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Request for Quote (RFQ) Markets
                </span>
              </div>
              <Link href="#" className="btn btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
          <div className="performance-wrapper-bottom">
            <div className="performance-wrap performance-left">
              <h3>Across the Asset Classes</h3>
              <p>
                At the heart of our mission lies a boundless vision to
                democratize
                <span className="br"></span>
                and diversify the world of trading.
              </p>
              <div className="li-wrap">
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Futures, Options, Swaps
                </span>
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Environment Commodities (ESG)
                </span>
                <span className="performance-li">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Predictions and Events
                </span>
                <span className="performance-li performance-li-last">
                  <Image
                    width={20}
                    height={20}
                    src="/img/check.svg"
                    alt="check svg"
                  />
                  Equities, Fixed Income, Rates
                </span>
              </div>
              <Link href="#" className="btn btn-secondary">
                Learn more
              </Link>
            </div>
            <div className="performance-wrap performance-right">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg2.jpg"
                  alt="performance bg"
                />
              </div>
              <div className="overlay">
                <h4>Asset Classes</h4>
                <div className="overlay-card">
                  <div className="overlay-single">
                    <Image
                      width={24}
                      height={24}
                      src="/img/overlay-icon.svg"
                      alt="overlay icon"
                    />
                    <h5>cash</h5>
                  </div>
                  <span>1st priority</span>
                </div>
                <div className="overlay-card">
                  <div className="overlay-single">
                    <Image
                      width={24}
                      height={24}
                      src="/img/overlay-icon2.svg"
                      alt="overlay icon"
                    />
                    <h5>Equities</h5>
                  </div>
                  <span>2nd priority</span>
                </div>
                <div className="overlay-card">
                  <div className="overlay-single">
                    <Image
                      width={24}
                      height={24}
                      src="/img/overlay-icon3.svg"
                      alt="overlay icon"
                    />
                    <h5>Fixed Income</h5>
                  </div>
                  <span>3rd priority</span>
                </div>
                <div className="overlay-card">
                  <div className="overlay-single">
                    <Image
                      width={24}
                      height={24}
                      src="/img/overlay-icon4.svg"
                      alt="overlay icon"
                    />
                    <h5>Alternative</h5>
                  </div>
                  <span>4th priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="revolution">
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
              imgSrc="revolution"
              title="Thriving Marketplaces"
              content="Transform your disruptive marketplace vision into reality, rapidly and
        efficiently."
              link="learn more"
            />
            <RevolutionCard
              imgSrc="revolution2"
              title="Thriving Marketplaces"
              content="Transform your disruptive marketplace vision into reality, rapidly and
        efficiently."
              link="learn more"
            />
            <RevolutionCard
              imgSrc="revolution3"
              title="Thriving Marketplaces"
              content="Transform your disruptive marketplace vision into reality, rapidly and
        efficiently."
              link="learn more"
            />
            <RevolutionCard
              imgSrc="revolution4"
              title="Thriving Marketplaces"
              content="Transform your disruptive marketplace vision into reality, rapidly and
        efficiently."
              link="learn more"
            />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Elevate Your Strategy with Our Expert Complementary Services
            </h2>
            <p>
              We envision empowering your aspirations, orchestrating a
              comprehensive transformation that fuels your success in a dynamic
              market.
            </p>
          </div>
          <div className="services-wrapper">
            <div className="services-inner">
              <div className="services-img-area">
                <Image
                  width={590}
                  height={440}
                  src="/img/services-img.jpg"
                  alt="services img"
                />
                <div className="overlay overlay-inside">
                  <h4>Financials Graph</h4>
                  <div className="chart-line"></div>
                </div>
              </div>
              <div className="services-content">
                <div className="overlay overlay-outside">
                  <h4>Financials Graph</h4>
                  <div className="chart-line2"></div>
                </div>
                <h3>Excellence Through Professional Services</h3>
                <p>
                  Unlock exceptional potential elevate your EP3 platform with
                  tailored enhancements. Our custom Software development
                  services drive operational and business excellence.
                </p>
                <Link
                  href="/professional-services"
                  className="btn btn-secondary"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="services-inner">
              <div className="services-img-area">
                <Image
                  width={590}
                  height={440}
                  src="/img/services-img2.jpg"
                  alt="services img"
                />
                <div className="overlay overlay-inside">
                  <h4>Total Changes</h4>
                  <div className="chart-bar2"></div>
                </div>
              </div>
              <div className="services-content">
                <div className="overlay overlay-outside">
                  <h4>Total Changes</h4>
                  <div className="chart-bar"></div>
                </div>
                <h3>Growth Through Dedicated Support Services</h3>
                <p>
                  Our team of experts is dedicated to ensuring your
                  platform&lsquo;s seamless performance, offering soft
                  resolutions and innovative solutions to any challenges that
                  may arise.
                </p>
                <Link href="/support-services" className="btn btn-secondary">
                  Learn more
                </Link>
              </div>
            </div>
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
              title="Shaping the Financial Landscape: Unveiling the American Financial
              Exchange"
              content="This case study unveils a narrative of collaboration, innovation,
              and the power of a strategic partnership that has empowered
              American Financial Exchange to navigate challenges, drive
              efficiency, and achieve remarkable outcomes in the financial
              landscape."
              link="case-studies-single"
            />
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <Stories
              imgSrc="success-stories2"
              title="Navigating Success: Unveiling the Triumph of APAC Bourse's On-Prem
              Exchange Platform"
              content="Discover how APAC Bourse leveraged cutting-edge innovations to
              navigate challenges, capitalize on opportunities, and drive
              unprecedented growth in the exchange landscape. The power of
              partnership, innovation, and the on achieving remarkable outcomes."
              link="case-studies-single"
            />
          </div>
        </div>
      </section>
      <Contact
        headingTitle="SoftXchange Simplifying Exchange Endeavors"
        headingContent="Explore how we empowers exchange operators across diverse markets
            and assets."
      />
    </>
  );
}
