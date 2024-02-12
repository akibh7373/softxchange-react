import Image from "next/image";
import Link from "next/link";
export default function PlatformFeaturesCard({ imgSrc, title, content, link }) {
  return (
    <div className="card-single">
      <div className="card-img-area">
        <Image
          width={400}
          height={400}
          src={`/img/${imgSrc}.jpg`}
          alt={imgSrc}
        />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        {content && <p>{content}</p>}
        {link && (
          <Link href={`/${link}`} className="btn-tertiary">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.6492 11.975L7.69922 7.02498L9.37422 5.34998L15.9992 11.975L9.37422 18.6L7.69922 16.925L12.6492 11.975Z"
                fill="#0553F0"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
