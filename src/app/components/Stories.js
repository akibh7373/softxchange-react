import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Stories({ imgSrc, title, content, link }) {
  return (
    <>
      <div className="stories-img">
        <Image
          width={607}
          height={358}
          src={`/img/${imgSrc}.jpg`}
          alt={imgSrc}
        />
      </div>
      <div className="stories-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <Link href={link} className="btn-tertiary">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.6502 11.975L7.7002 7.02498L9.3752 5.34998L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
              fill="#0553F0"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
