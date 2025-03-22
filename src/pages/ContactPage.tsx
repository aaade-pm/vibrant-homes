import React from "react";
import { pageIntroAnimation } from "../animations/pageIntroAnimation";

const ContactPage: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const overlayRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    const [one, two, three, four] = overlayRefs.current;
    if (
      !titleRef.current ||
      !contentRef.current ||
      !textRef.current ||
      !one ||
      !two ||
      !three ||
      !four
    )
      return;

    const tl = pageIntroAnimation(titleRef.current, contentRef.current);

    tl?.fromTo(
      [four, three, two, one],
      { height: "100%", scale: 1.2 },
      {
        height: "0%",
        scale: 1.2,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }
    ).fromTo(
      textRef.current,
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
      "<"
    );
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1720436081701-5b692dbe8969",
    "https://images.unsplash.com/photo-1714669257298-7eb2672fa461",
    "https://images.unsplash.com/photo-1661332626638-f60fc1e9cc09",
  ];

  return (
    <section className="w-full flex flex-col gap-4 lg:gap-10">
      <h1
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold font-ojuju text-vibrantGreen opacity-0"
      >
        Contact
      </h1>

      <section
        ref={contentRef}
        className="bg-vibrantGreen px-6 py-10 xl:px-10 xl:py-20 flex flex-col gap-4 lg:gap-7 opacity-0"
      >
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url("${img}?w=900&auto=format&fit=crop&q=60")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`w-full h-35 md:h-50 lg:h-42 xl:h-50 relative ${
                i === 2 ? "hidden md:block" : ""
              }`}
            >
              <div
                ref={(el) => {
                  overlayRefs.current[i] = el;
                }}
                className="absolute w-full h-full top-0 bg-vibrantGreen"
              />
            </div>
          ))}
        </div>

        {/* Single for small screens */}
        <div
          className="w-full md:hidden h-50 relative"
          style={{
            backgroundImage: `url("${images[2]}?w=900&auto=format&fit=crop&q=60")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            ref={(el) => {
              overlayRefs.current[3] = el;
            }}
            className="absolute w-full h-full top-0 bg-vibrantGreen"
          />
        </div>

        <div ref={textRef} className="opacity-0">
          <h1 className="text-3xl sm:text-4xl md:text-7xl mb-3 font-bold font-ojuju text-vibrantNeutral">
            Got any issues?
          </h1>
          <p className="text-sm lg:text-lg font-jetbrains text-vibrantNeutral leading-6 lg:leading-9">
            Call us at +01 234 567 890 or reach us at{" "}
            <span className="underline">hi@vibranthomes.com</span>.
          </p>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
