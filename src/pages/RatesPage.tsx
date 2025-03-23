import React from "react";
import gsap from "gsap";
import { pageIntroAnimation } from "../animations/pageIntroAnimation";

type CityRate = {
  city: string;
  low: string;
  mid: string;
  high: string;
};

const ratesData: CityRate[] = [
  {
    city: "Ikeja",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Iyanapaja",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Lekki",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Maryland",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Fadeyi",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Ikoyi",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Bourdillon",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Banana Island",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
];

const RatesPage: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const rateCardsWrapperRef = React.useRef<HTMLDivElement>(null);
  const buttonsRef = React.useRef<HTMLButtonElement[]>([]);

  React.useEffect(() => {
    if (
      !titleRef.current ||
      !contentRef.current ||
      !textRef.current ||
      !rateCardsWrapperRef.current
    )
      return;
    const tl = pageIntroAnimation(titleRef.current, contentRef.current);

    tl?.fromTo(
      rateCardsWrapperRef.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
      }
    ).to(textRef.current, {
      opacity: 1,
      duration: 9.0,
      ease: "power4.out",
    });
  }, []);

  const handleHover = (index: number, type: "enter" | "leave") => {
    const button = buttonsRef.current[index];
    if (!button) return;

    if (type === "enter") {
      gsap.to(button, {
        skewX: 6,
        backgroundColor: "black",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(button, {
        skewX: 0,
        backgroundColor: "#0f4235",
        duration: 0.2,
        ease: "power2.inOut",
      });
    }
  };
  return (
    <section className="w-full text-vibrantTextGreen pb-10">
      <h1
        ref={titleRef}
        className="opacity-0 text-3xl sm:text-4xl md:text-5xl mb-6 font-bold font-ojuju text-vibrantGreen"
      >
        Rates
      </h1>
      <div ref={contentRef} className="opacity-0">
        <p className="text-sm lg:text-base font-jetbrains mb-6 leading-6 lg:leading-7">
          At Vibrant Homes, we strive to provide exceptional value for our
          guests while maintaining the highest standards of comfort and style.
          Our rates vary depending on the location, season, and length of stay.
          Below you’ll find a general overview of our pricing. For specific
          dates and availability, please visit the individual listings on our
          Airbnb page.
        </p>

        <div
          ref={textRef}
          className="bg-yellow-400 opacity-0 p-6 text-sm font-jetbrains mb-18"
        >
          Applicable to all our homes:{" "}
          <span className="font-bold">Weekly Discount:</span> 10% off |{" "}
          <span className="font-bold">Monthly Discount:</span> 20% off
        </div>

        <div
          ref={rateCardsWrapperRef}
          className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
        >
          {ratesData.map(({ city, low, mid, high }, i) => (
            <div
              key={city}
              className="bg-vibrantGreen text-vibrantNeutral px-6 py-8 flex flex-col gap-6 justify-between"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-ojuju">
                {city}
              </h2>
              <div className="space-y-6 font-jetbrains text-sm lg:text-base">
                <p>
                  <strong>LOW SEASON (JAN–MAR):</strong> <br />
                  {low}
                </p>
                <p>
                  <strong>MID SEASON (APR–MAY, SEP–NOV):</strong> <br />
                  {mid}
                </p>
                <p>
                  <strong>HIGH SEASON (JUN–AUG, DEC):</strong> <br />
                  {high}
                </p>
              </div>
              <button
                onMouseEnter={() => handleHover(i, "enter")}
                onMouseLeave={() => handleHover(i, "leave")}
                ref={(el) => {
                  if (el) {
                    buttonsRef.current[i] = el;
                  }
                }}
                className="mt-6 border border-vibrantNeutral px-4 py-2 font-jetbrains"
              >
                Book on Airbnb
              </button>
            </div>
          ))}
        </div>

        <section className="w-full font-jetbrains">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-bold font-ojuju text-vibrantGreen">
            Additional Information
          </h2>

          <ul className="list-disc space-y-4 ml-5 text-sm lg:text-base">
            <li>
              <strong>Cleaning Fee:</strong> A one-time cleaning fee of $50/€50
              applies to all bookings.
            </li>
            <li>
              <strong>Security Deposit:</strong> A refundable security deposit
              of $200/€200 is required at check-in.
            </li>
            <li>
              <strong>Taxes:</strong> Rates are exclusive of local taxes and
              fees, which vary by location.
            </li>
            <li>
              <strong>Cancellation Policy:</strong> Full refund for
              cancellations made within 48 hours of booking, provided the
              check-in date is at least 14 days away. 50% refund for
              cancellations made at least 7 days before check-in. No refund for
              cancellations made within 7 days of check-in.
            </li>
          </ul>

          <p className="mt-8 text-sm lg:text-base leading-6 lg:leading-7">
            For the most accurate rates and availability, please visit our{" "}
            <a
              href="/"
              className="underline text-vibrantGreen hover:text-vibrantTextGreen"
            >
              Airbnb profile
            </a>{" "}
            and select your preferred dates and apartment. <br />
            Thank you for choosing Vibrant Homes for your stay!
          </p>
        </section>
      </div>
    </section>
  );
};

export default RatesPage;
