import Link from "next/link";
import Image from "next/image";
export default function Services({ imgSrc, title, content, link }) {
  return (
    <div className="services-inner">
      <div className="services-img-area">
        <Image
          width={590}
          height={440}
          src={`/img/${imgSrc}.jpg`}
          alt={imgSrc}
        />
      </div>
      <div className="services-content">
        <h4 className="heading-title">{title}</h4>
        <p className="heading-subtitle">{content}</p>
        <Link href={`/${link}`} className="btn btn-secondary">
          Learn more
        </Link>
      </div>
    </div>
  );
}
