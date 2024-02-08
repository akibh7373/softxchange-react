import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturedIn from "@/components/FeaturedIn";
import RevolutionCard from "@/components/RevolutionCard";
import JobCard from "@/components/JobCard";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>
            Reinventing Global Exchanges and Marketplaces
            <span className="br"></span> for the Future
          </h1>
          <p>
            We&lsquo;re on the lookout for creative thinkers and solution
            finders who are passionate about developing{" "}
            <span className="br"></span>
            cutting-edge exchange technologies that enhance transparency in
            global marketplaces.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="performance">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Empowering Innovators with Agile Collaboration and Unyielding
              Integrity
            </h2>
            <p>
              Our culture is built on professionalism, personal integrity, and
              teamwork, creating <span className="br"></span> an environment
              where every member is inspired to deliver their best work.
            </p>
          </div>
          <div className="performance-wrapper-top">
            <div className="performance-wrap performance-left">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg6.jpg"
                  alt="performance bg"
                />
              </div>
            </div>
            <div className="performance-wrap performance-right">
              <h3>Collaboration Fuels Progress</h3>
              <p>
                With a wealth of expertise in both capital markets and
                technology spanning decades, we recognize the pivotal role of
                collaboration in fostering groundbreaking innovations. Our
                approach is lean and agile, standing in stark contrast to
                bureaucracy. We operate with a keen sense of urgency, ensuring
                softness without sacrificing quality. At the core of our ethos
                lies professionalism and unwavering personal integrity. We grasp
                the importance of unity as a team in driving our company
                forward, which is why we are dedicated to nurturing a
                supportive, ego-free atmosphere that motivates you to excel in
                your endeavors.
              </p>
              <Link href="/about" className="btn btn-secondary">
                Learn more About Us
              </Link>
            </div>
          </div>
          <div className="performance-wrapper-bottom">
            <div className="performance-wrap performance-left">
              <h3>Exceptional Innovations. Transformational Outcomes.</h3>
              <p>
                Each member of our team is a luminary in their respective
                domain. You&lsquo;ll collaborate with brilliant, deeply
                knowledgeable experts who are wholeheartedly dedicated to
                bringing inventive concepts to life. Our culture thrives on
                meritocracy, where great ideas take precedence over hierarchy.
                Right from the outset, you&lsquo;ll be embraced as a valued team
                member, working in harmony with others to craft flawless and
                prosperous solutions for our clients and our collective success.
              </p>
              <Link href="about" className="btn btn-secondary">
                Learn more About Us
              </Link>
            </div>
            <div className="performance-wrap performance-right">
              <div className="performance-img-area">
                <Image
                  width={608}
                  height={470}
                  src="/img/performance-bg7.jpg"
                  alt="performance bg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="career-services">
        <div className="container">
          <div className="heading-wrapper">
            <h2>What Sets SoftXchange Technologies Apart</h2>
            <p>
              Our team is the cornerstone of our achievements, and your
              well-being is our priority. <span className="br"></span>{" "}
              Here&lsquo;s a glimpse of what awaits you when you become a part
              of our family.
            </p>
          </div>
          <div className="card-wrapper">
            <RevolutionCard
              imgSrc="revolution24"
              title="Experience Rewards"
              content="We provide comprehensive benefits and a range of enticing perks that rival those offered by top tech companies."
            />
            <RevolutionCard
              imgSrc="revolution25"
              title="Embrace Remote Work"
              content="Unlock the freedom to work from anywhere in the world, embracing autonomy, flexibility, and productivity through remote work."
            />
            <RevolutionCard
              imgSrc="revolution26"
              title="Journey To Capital Market Mastery"
              content="Deepen your expertise in trading, exchange operations, and emerging asset classes as you explore the dynamic world of capital markets."
            />
            <RevolutionCard
              imgSrc="revolution27"
              title="Collaborate With Market Innovators"
              content="Our clients are transforming global trade, enhancing fairness, transparency, and access while supporting emerging economies and conserving resources."
            />
            <RevolutionCard
              imgSrc="revolution28"
              title="Drive Meaningful Change"
              content="Our team is the backbone of our success, and we're committed to providing you an environment where you can thrive, be rewarded for your contributions."
            />
            <RevolutionCard
              imgSrc="revolution29"
              title="Elevate Your Intellectual Boundaries"
              content="Our work is far from boring, as we continuously innovate and solve intricate problems in the realm of capital markets technology."
            />
          </div>
        </div>
      </section>
      <section className="career-job">
        <div className="container">
          <div className="heading-wrapper">
            <h2>Explore Our Available Job Opportunities</h2>
            <p>
              Discover where your unique skills can make an impact in our
              diverse range of job opportunities.
            </p>
          </div>
          <div className="card-wrapper">
            <JobCard
              title="Software Engineering"
              content="Collaborate with our exceptionally skilled engineering team to tackle intricate challenges."
            />
            <JobCard
              title="Sales"
              content="Your role will involve engaging with these clients, understanding their unique needs, and presenting tailored solutions."
            />
            <JobCard
              title="Consulting"
              content="Empower Businesses with Cloud Acceleration Unleashing the Synergy of Technologies for Seamless Transformation."
            />
            <JobCard
              title="Cloud"
              content="Revolutionizing Scalability and Security in Cloud Computing A Journey with Open Source Technology."
            />
            <JobCard
              title="Infrastructure & Technology"
              content="Exploring the Pinnacle of Tech Infrastructure From Mainframes to Cutting-Edge Virtualization."
            />
            <JobCard
              title="Data & Analytics"
              content="Welcome to a future where innovation knows no bounds, and your cloud dreams become a reality."
            />
          </div>
        </div>
      </section>
      <section className="career-platform-features">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Synergy in Diversity Our Cohesive Team of Exceptional Individuals
            </h2>
            <p>
              This rich blend of backgrounds empowers us to craft inventive
              solutions that consistently <span className="br"></span> exceed
              client expectations.
            </p>
          </div>
          <div className="career-diversity-wrapper">
            <div className="career-diversity-img">
              <Image
                width={1216}
                height={560}
                src="/img/diversity.jpg"
                alt="diversity"
              />
            </div>
            <div className="career-diversity-inner">
              <div className="career-diversity-inner-img">
                <Image
                  width={384}
                  height={320}
                  src="/img/diversity2.jpg"
                  alt="diversity"
                />
              </div>
              <div className="career-diversity-inner-img">
                <Image
                  width={384}
                  height={320}
                  src="/img/diversity3.jpg"
                  alt="diversity"
                />
              </div>
              <div className="career-diversity-inner-img">
                <Image
                  width={384}
                  height={320}
                  src="/img/diversity4.jpg"
                  alt="diversity"
                />
              </div>
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
