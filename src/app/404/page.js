import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <section className="hero four-zero-hero">
        <div className="container">
          <div className="hero-left">
            <h1>Page Not Found!</h1>
            <p className="hero-subtitle">
              Oops! It looks like you&apos;ve taken a wrong turn. The page
              <span className="br"></span> you&apos;re looking for might have
              been moved or doesn&apos;t exist.
            </p>
            <Link href="/" className="btn btn-primary">
              Go Back to the Homepage
            </Link>
          </div>
          <div className="four-zero-content">
            <span className="four-zero">404</span>
          </div>
        </div>
      </section>
    </>
  );
}
