import FeaturedIn from "@/components/FeaturedIn";
import Stories from "@/components/Stories";
import Contact from "@/components/Contact";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Real-World Case Studies for Trading Enterprises</h1>
          <p>
            Real Success Stories Empowering Diverse Businesses to Thrive with
            SoftXchange <span className="br"></span> Technologies Advanced
            Exchange Platform and Matching Engine
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="stories case-studies-stories">
        <div className="container">
          <div className="stories-wrapper stories-top">
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
          <div className="stories-wrapper stories-wrapper-bottom">
            <Stories
              imgSrc="success-stories3"
              title="MaterialsXchange: Transforming Commodity Trading with Advanced Exchange Solutions"
              content="This case study delves into real-world success, showcasing how MaterialsXchange, regardless of its size and unique needs, has harnessed the power of SoftXchange's cutting-edge exchange platform and matching engine."
              link="case-studies-single"
            />
          </div>
          <div className="stories-wrapper stories-wrapper-bottom">
            <Stories
              imgSrc="success-stories4"
              title="TeraExchange: Pioneering Swap Execution Facility with Advanced Exchange Platform"
              content="Discover how APAC Bourse leveraged cutting-edge innovations to navigate challenges, capitalize on opportunities, and drive unprecedented growth in the exchange landscape. The power of partnership, innovation, and the on achieving remarkable outcomes."
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
