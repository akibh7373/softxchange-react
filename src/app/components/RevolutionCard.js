import Link from "next/link";
import Image from "next/image";
export default function RevolutionCard({ imgSrc, title, content, link }) {
  return (
    <div className="card-single">
      <Image width={48} height={48} src={`/img/${imgSrc}.svg`} alt={imgSrc} />
      <h4>{title}</h4>
      <p>{content}</p>
      {link && (
        <Link href="#" className="btn-tertiary">
          {link}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.6502 11.975L7.7002 7.025L9.3752 5.35L16.0002 11.975L9.3752 18.6L7.7002 16.925L12.6502 11.975Z"
              fill="#0553F0"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
