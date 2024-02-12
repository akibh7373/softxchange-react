import Image from "next/image";
import FeaturedIn from "@/components/FeaturedIn";

export default function page() {
  return (
    <>
      <section className="secondary-hero">
        <div className="container">
          <h1>Get in Touch with SoftXchange</h1>
          <p>
            We&lsquo;re on a mission to empower individuals and businesses with
            the tools and knowledge <span className="br"></span> they need to
            take control of their financial futures.
          </p>
        </div>
      </section>
      <FeaturedIn />
      <section className="map-bg">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9497.694007250842!2d-74.2317666583139!3d40.85467928103608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3003cacdbe037%3A0x7fd29a87cb004bcb!2sThe%20Fresh%20Grocer%20of%20Pompton%20Ave.!5e0!3m2!1sen!2sbd!4v1705821431283!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-details">
            <div className="details-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_4771)">
                  <path
                    d="M24 48C23.7563 47.9998 23.521 47.9109 23.338 47.75C22.63 47.124 6 32.288 6 18C6 8.074 14.076 0 24 0C33.924 0 42 8.074 42 18C42 32.288 25.37 47.124 24.662 47.75C24.479 47.9109 24.2437 47.9998 24 48ZM24 2C15.178 2 8 9.178 8 18C8 29.836 20.902 42.716 24 45.638C27.098 42.716 40 29.836 40 18C40 9.178 32.822 2 24 2Z"
                    fill="black"
                  />
                  <path
                    d="M24 28C18.486 28 14 23.514 14 18C14 12.486 18.486 8 24 8C29.514 8 34 12.486 34 18C34 23.514 29.514 28 24 28ZM24 10C19.588 10 16 13.588 16 18C16 22.412 19.588 26 24 26C28.412 26 32 22.412 32 18C32 13.588 28.412 10 24 10Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_4771">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5>Location</h5>
              <p>103 Summit Avenue, 4th Floor, Austin, Texas 78702</p>
            </div>
            <div className="details-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_4778)">
                  <path
                    d="M43.8339 48C43.7239 48 43.6138 47.996 43.5019 47.988C20.3778 46.196 1.67985 27.508 0.00985132 4.522C-0.0321502 3.95057 0.0430456 3.37658 0.230825 2.83525C0.418605 2.29392 0.715009 1.79667 1.10185 1.374C1.4778 0.963756 1.93483 0.63603 2.444 0.411567C2.95317 0.187105 3.5034 0.0707948 4.05985 0.07L13.6719 0C15.5579 0 17.1899 1.266 17.6479 3.08L19.6559 11.056C20.0559 12.652 19.4599 14.318 18.1399 15.302L13.9079 18.454C17.3519 24.968 22.7859 30.434 29.3439 33.972L32.6079 29.65C33.0926 29.0096 33.7547 28.5257 34.512 28.2583C35.2693 27.991 36.0885 27.9519 36.8679 28.146L44.8999 30.14C45.7839 30.3562 46.5698 30.8627 47.1318 31.5785C47.6938 32.2943 47.9995 33.1779 47.9999 34.088V43.93C47.9999 45.064 47.5419 46.112 46.7059 46.886C45.9228 47.6055 44.8972 48.0032 43.8339 48ZM13.6799 2L4.07385 2.07C3.49585 2.074 2.96185 2.31 2.57185 2.732C2.37001 2.95277 2.21549 3.21252 2.11781 3.49525C2.02012 3.77798 1.98134 4.07772 2.00385 4.376C3.60185 26.384 21.5099 44.276 43.6579 45.992C44.2939 46.052 44.9019 45.83 45.3479 45.416C45.5543 45.2276 45.719 44.9981 45.8313 44.7421C45.9436 44.4862 46.001 44.2095 45.9999 43.93V34.088C45.9999 33.136 45.3498 32.312 44.4179 32.082L36.3859 30.088C35.9869 29.9873 35.5672 30.0064 35.179 30.143C34.7909 30.2796 34.4517 30.5276 34.2038 30.856L30.4279 35.856C30.2867 36.0441 30.0836 36.1761 29.8545 36.2288C29.6254 36.2815 29.385 36.2515 29.1759 36.144C21.6579 32.302 15.4659 26.072 11.7379 18.604C11.6323 18.3944 11.6041 18.1543 11.6582 17.926C11.7124 17.6977 11.8454 17.4958 12.0339 17.356L16.9439 13.698C17.6159 13.198 17.9199 12.352 17.7159 11.542L15.7079 3.57C15.5936 3.11949 15.3318 2.72018 14.9643 2.43566C14.5968 2.15115 14.1446 1.99778 13.6799 2Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_4778">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5>Telephone</h5>
              <p>+44 (0)203 355 7156</p>
            </div>
            <div className="details-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_509_4784)">
                  <path
                    d="M44 40H4C1.794 40 0 38.206 0 36V12C0 9.794 1.794 8 4 8H44C46.206 8 48 9.794 48 12V36C48 38.206 46.206 40 44 40ZM4 10C2.898 10 2 10.898 2 12V36C2 37.102 2.898 38 4 38H44C45.102 38 46 37.102 46 36V12C46 10.898 45.102 10 44 10H4Z"
                    fill="black"
                  />
                  <path
                    d="M23.9999 27.4881C23.2059 27.4881 22.4119 27.3001 21.6859 26.9221L0.53793 15.8861C0.317228 15.7554 0.155032 15.5451 0.0847465 15.2985C0.0144609 15.0518 0.0414371 14.7876 0.160119 14.5602C0.278802 14.3328 0.480153 14.1596 0.722707 14.0763C0.96526 13.9929 1.23055 14.0057 1.46393 14.1121L22.6139 25.1461C23.0424 25.3697 23.5186 25.4865 24.0019 25.4865C24.4853 25.4865 24.9614 25.3697 25.3899 25.1461L46.5399 14.1121C46.7752 13.9893 47.0496 13.965 47.3027 14.0445C47.5559 14.124 47.7671 14.3009 47.8899 14.5361C48.0127 14.7714 48.037 15.0457 47.9575 15.2989C47.878 15.5521 47.7012 15.7633 47.4659 15.8861L26.3139 26.9201C25.5879 27.2981 24.7939 27.4881 23.9999 27.4881Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_509_4784">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5>Email Address</h5>
              <p>enquiries@softxchange.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-bg contact-form">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              <h3>
                Schedule a 30-Minute Discovery Call to Explore Opportunities
                Together
              </h3>
              <p>
                Remember, this call is about exploring how we can best support
                your business, so feel free to share any specific challenges or
                goals you have in mind.
              </p>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Learn how our automation solutions can streamline your
                operations, saving valuable time and reducing errors.
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discover the benefits of centralizing your tools and sales
                channels for a more cohesive and efficient workflow.
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Understand how our solutions are designed to scale with your
                business, ensuring they continue to support your growth.
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Explore how we can tailor a bespoke platform to meet your
                specific business needs, aligning with your long-term growth
                goals.
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discuss how we work closely with you to understand your business
                and tailor solutions that fit seamlessly into your processes.
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discover the Learn how automation can lead to cost reductions
                and increased profitability.
              </span>
              <span className="performance-li">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Get insights from our team of experts on optimizing your
                operations and achieving your business objectives.
              </span>
              <span className="performance-li performance-li-last">
                <Image
                  width={20}
                  height={20}
                  src="/img/check.svg"
                  alt="check icon"
                />
                Discuss the next steps for initiating the automation and
                optimization process.
              </span>
            </div>
            <div className="contact-right">
              <h4>Every journey starts with a single step!</h4>
              <p>
                Tell us a bit more about your project and we will set up an
                introduction call to get to know each other a little better.
              </p>
              <form>
                <label for="name">Full Name</label>
                <input type="text" name="name" id="name" required />
                <label for="company-name">Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  id="company-name"
                  required
                />
                <label for="company-size">Company Size</label>
                <input
                  type="text"
                  name="company-size"
                  id="company-size"
                  required
                />
                <label for="website">Company Website</label>
                <input type="text" name="website" id="website" required />
                <label for="email">Email Address</label>
                <input type="email" name="email" id="email" required />
                <label for="msg">How Can We Help You?</label>
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
