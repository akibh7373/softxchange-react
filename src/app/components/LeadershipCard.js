import Image from "next/image";
export default function LeadershipCard({ imgSrc, title, content }) {
  return (
    <>
      <div className="card-single">
        <div className="card-img">
          <Image
            width={382}
            height={400}
            src={`/img/${imgSrc}.jpg`}
            alt={imgSrc}
          />
        </div>
        <div className="card-content">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
