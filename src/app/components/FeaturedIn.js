import Image from "next/image";
export default function FeaturedIn() {
  return (
    <section className="featured">
      <div className="container">
        <h5 className="featured-title">
          Preferred by over 50,000 top-tier enterprises
        </h5>
        <div className="group-brand">
          <Image
            width={170}
            height={30}
            src="/img/group-brand.png"
            alt="group brand logo"
          />
          <Image
            width={100}
            height={30}
            src="/img/group-brand2.png"
            alt="group brand logo"
          />
          <Image
            width={164}
            height={30}
            src="/img/group-brand3.png"
            alt="group brand logo"
          />
          <Image
            width={114}
            height={30}
            src="/img/group-brand4.png"
            alt="group brand logo"
          />
          <Image
            width={130}
            height={30}
            src="/img/group-brand5.png"
            alt="group brand logo"
          />
          <Image
            width={84}
            height={30}
            src="/img/group-brand6.png"
            alt="group brand logo"
          />
        </div>
      </div>
    </section>
  );
}
