import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import LeadershipCard from "@/components/LeadershipCard";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Executive Team</h1>
          <p>
            Our accomplished leadership team is at the forefront of SoftXchange
            Technologies, <span className="br"></span> guiding us with their
            deep industry knowledge and expertise.
          </p>
        </div>
      </section>
      <section className="leadership">
        <div className="container">
          <div className="card-wrapper">
            <LeadershipCard
              imgSrc="leadership"
              title="Jacob Jones"
              content="Co-Founder and Chief Executive Officer"
            />
            <LeadershipCard
              imgSrc="leadership2"
              title="Kristin Watson"
              content="Co-Founder and Chief Financial Officer"
            />
            <LeadershipCard
              imgSrc="leadership3"
              title="Floyd Miles"
              content="Chief Operating Officer"
            />
            <LeadershipCard
              imgSrc="leadership4"
              title="Jane Cooper"
              content="Head of Growth"
            />
            <LeadershipCard
              imgSrc="leadership5"
              title="Ronald Richards"
              content="Director of Product Engineering"
            />
            <LeadershipCard
              imgSrc="leadership6"
              title="Brooklyn Simmons"
              content="Product Owner"
            />
            <LeadershipCard
              imgSrc="leadership7"
              title="Guy Hawkins"
              content="Director of Professional Services"
            />
            <LeadershipCard
              imgSrc="leadership8"
              title="Bessie Cooper"
              content="Client Engagement Manager"
            />
            <LeadershipCard
              imgSrc="leadership9"
              title="Leslie Alexander"
              content="Director of Information Security"
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
