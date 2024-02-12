"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [dropDownContent, setDropDownContent] = useState(false);
  const [dropDownContent2, setDropDownContent2] = useState(false);
  const [dropDownContent3, setDropDownContent3] = useState(false);
  const [dropDownContent4, setDropDownContent4] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={headerShadow ? "header-shadow" : ""}>
      <div className="container">
        <Link href="/">
          <Image
            width={200}
            height={32}
            src="/img/logo.png"
            className="brand-logo"
            alt="brand-logo"
          />
        </Link>
        <nav className={`${isActive ? "active" : ""}`}>
          <ul className="nav-ul">
            <li className="nav-li">
              <Link
                onClick={() => {
                  !dropDownContent
                    ? setDropDownContent(true)
                    : setDropDownContent(false);
                }}
                href="#"
                className="nav-link"
              >
                solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </Link>
              <div
                className={`dropdown-content ${
                  dropDownContent ? "dropdown-content-active" : ""
                }`}
              >
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/features">Features & Functionality</Link>
                  </li>
                  <li>
                    <Link href="/api">APIs & Integrations</Link>
                  </li>
                  <li>
                    <Link href="/market">Market Surveillance</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/features">Features & Functionality</Link>
                  </li>
                  <li>
                    <Link href="/api">APIs & Integrations</Link>
                  </li>
                  <li>
                    <Link href="/market">Market Surveillance</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <Link
                onClick={() => {
                  !dropDownContent2
                    ? setDropDownContent2(true)
                    : setDropDownContent2(false);
                }}
                href="#"
                className="nav-link2"
              >
                services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </Link>
              <div
                className={`dropdown-content ${
                  dropDownContent2 ? "dropdown-content-active2" : ""
                }`}
              >
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/professional-services.html">
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/support-services">Support Services</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/professional-services">
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/support-services">Support Services</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <Link
                onClick={() => {
                  !dropDownContent3
                    ? setDropDownContent3(true)
                    : setDropDownContent3(false);
                }}
                href="#"
                className="nav-link3"
              >
                resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </Link>
              <div
                className={`dropdown-content ${
                  dropDownContent3 ? "dropdown-content-active3" : ""
                }`}
              >
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/news">News & Insights</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/news">News & Insights</Link>
                  </li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-li">
              <Link
                onClick={() => {
                  !dropDownContent4
                    ? setDropDownContent4(true)
                    : setDropDownContent4(false);
                }}
                href="#"
                className="nav-link4"
              >
                company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </Link>
              <div
                className={`dropdown-content ${
                  dropDownContent4 ? "dropdown-content-active4" : ""
                }`}
              >
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown-nav">
                <ul className="dropdown-ul">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary">
            contact us
          </Link>
          <svg
            onClick={() => {
              setIsActive(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="close-btn"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </nav>
        <svg
          onClick={() => {
            setIsActive(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bar"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </header>
  );
}
