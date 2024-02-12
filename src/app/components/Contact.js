import Link from "next/link";
export default function Contact({ headingTitle, headingContent }) {
  return (
    <section className="contact">
      <div className="container">
        <div className="heading-wrapper">
          <h2>{headingTitle}</h2>
          <p>{headingContent}</p>
        </div>
        <div>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
