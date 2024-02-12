import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-logo-wrapper">
          <Link href="/" className="brand-logo">
            <Image
              width={200}
              height={32}
              src="/img/logo.png"
              alt="footer brand logo"
            />
          </Link>
          <p>
            103 Summit Avenue, 4th Floor, <span className="br"></span> Austin,
            Texas 78702, <span className="br"></span> United States
          </p>
          <div className="icon-group">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.397 20.997V12.801H16.162L16.573 9.592H13.397V7.548C13.397 6.622 13.655 5.988 14.984 5.988H16.668V3.127C15.8487 3.03919 15.0251 2.99679 14.201 3C11.757 3 10.079 4.492 10.079 7.231V9.586H7.33203V12.795H10.085V20.997H13.397Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#" className="twitter-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.633 7.997C19.646 8.172 19.646 8.346 19.646 8.52C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6201 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7077C4.9679 15.207 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4488 4.29647 12.9543 3.70762 12.2337C3.11876 11.513 2.79769 10.6106 2.799 9.68V9.63C3.336 9.929 3.959 10.116 4.619 10.141C4.06609 9.77358 3.61272 9.27502 3.29934 8.68979C2.98596 8.10456 2.82231 7.45085 2.823 6.787C2.823 6.039 3.022 5.353 3.371 4.755C4.38314 6.00002 5.6455 7.01856 7.07634 7.74466C8.50717 8.47075 10.0746 8.88821 11.677 8.97C11.615 8.67 11.577 8.359 11.577 8.047C11.5767 7.51796 11.6807 6.99406 11.8831 6.50524C12.0854 6.01642 12.3821 5.57227 12.7562 5.19819C13.1303 4.8241 13.5744 4.52741 14.0632 4.32508C14.5521 4.12274 15.076 4.01873 15.605 4.019C16.765 4.019 17.812 4.505 18.548 5.291C19.4498 5.11661 20.3145 4.78742 21.104 4.318C20.8034 5.24881 20.1738 6.0381 19.333 6.538C20.1328 6.44678 20.9144 6.23645 21.652 5.914C21.1011 6.7171 20.4185 7.42134 19.633 7.997Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.98292 7.197C6.19132 7.197 7.17092 6.2174 7.17092 5.009C7.17092 3.8006 6.19132 2.821 4.98292 2.821C3.77452 2.821 2.79492 3.8006 2.79492 5.009C2.79492 6.2174 3.77452 7.197 4.98292 7.197Z"
                  fill="currentColor"
                />
                <path
                  d="M9.23575 8.85518V20.9942H13.0047V14.9912C13.0047 13.4072 13.3027 11.8732 15.2667 11.8732C17.2037 11.8732 17.2277 13.6842 17.2277 15.0912V20.9952H20.9988V14.3382C20.9988 11.0682 20.2948 8.55518 16.4728 8.55518C14.6378 8.55518 13.4078 9.56218 12.9047 10.5152H12.8537V8.85518H9.23575ZM3.09375 8.85518H6.86875V20.9942H3.09375V8.85518Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer-right">
          <h5>Solutions</h5>
          <Link href="/features">Features & Functionality</Link>
          <Link href="/api">APIs & Integrations</Link>
          <Link href="/market">Market Surveillance</Link>
        </div>
        <div className="footer-right">
          <h5>Services</h5>
          <Link href="/professional-services">Professional Services</Link>
          <Link href="/support-services">Support Services</Link>
        </div>
        <div className="footer-right">
          <h5>Resources</h5>
          <Link href="/news">News & Insights</Link>
          <Link href="/case-studies">Case Studies</Link>
        </div>
        <div className="footer-right">
          <h5>Company</h5>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/career">Careers</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2024 SoftXchange. All Rights Reserved.</p>
        <div className="footer-nav">
          <Link href="/terms-of-services">Terms of service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
