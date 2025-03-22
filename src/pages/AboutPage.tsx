import React from "react";
import { pageIntroAnimation } from "../animations/pageIntroAnimation";

const aboutContent = [
  <>
    Vibrant Homes was founded by two spirited Nigerians,{" "}
    <strong className="font-bold">Tolu Ogunlana</strong> and{" "}
    <strong className="font-bold">Ifeanyi Eze</strong>, with one simple belief:
    where you stay should be just as exciting as where you're going. Our mission
    is to deliver unforgettable short-stay experiences that are bold, beautiful,
    and bursting with personality—tailored for the modern Nigerian traveler,
    remote worker, or weekend wanderer.
  </>,

  <>
    Born from a shared love for aesthetics and adventure, the idea for Vibrant
    Homes came during one of their many road trips across Nigeria—from the
    bustling streets of Lagos to the calm serenity of Enugu. They noticed a gap
    in the hospitality scene: while there were plenty of places to stay, very
    few truly stood out. Most felt cold, generic, and uninspired.
  </>,

  <>
    Tolu and Ifeanyi knew something had to change. So, they set out to create a
    brand that didn't just offer accommodation, but an entire mood—a vibe that
    feels like home, only more exciting. A place where the walls talk through
    colour, where every corner reflects culture, and where design meets comfort
    in the most playful ways possible.
  </>,

  <>
    At Vibrant Homes, we curate each space to reflect the joy and energy of
    Nigeria's diverse cities. From Lagos’ coastal vibrance to Abuja’s classy
    calm, and even Ibadan’s laid-back charm, every apartment is a visual
    experience—featuring Afro-urban decor, striking art, locally crafted
    furniture, and a layout that invites you to relax, create, and connect.
  </>,

  <>
    We believe a short stay shouldn't feel short on meaning. That’s why each of
    our homes is intentionally styled to leave a lasting impression—from the
    music-inspired living rooms to the art-filled hallways and cozy, memory-foam
    beds. Whether you're visiting for work, play, or a little bit of both, our
    spaces are designed to spark joy the moment you walk in.
  </>,

  <>
    But it’s not just about aesthetics. We're obsessed with guest comfort and
    satisfaction. From seamless check-ins to thoughtful add-ons like Wi-Fi,
    curated playlists, Netflix, power backup, and even recommendations for the
    best suya spots or art galleries nearby—we think of everything so you can
    simply enjoy your stay.
  </>,

  <>
    Vibrant Homes isn’t just a brand—it’s a lifestyle. It’s for the dreamers,
    the doers, the lovers of colour, culture, and character. It’s for people
    like you, who appreciate more than just four walls and a bed.
  </>,

  <>
    So whether you’re coming to town for a celebration, a business meeting, or
    to simply escape the noise of everyday life, step into one of our homes—and
    experience Nigeria, reimagined.
  </>,
];

const AboutPage: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    pageIntroAnimation(titleRef.current, contentRef.current);
  }, []);
  return (
    <section className="w-full flex flex-col gap-4 lg:gap-7">
      <h1
        ref={titleRef}
        className="opacity-0 text-3xl sm:text-4xl md:text-5xl mb-3 font-bold font-ojuju text-vibrantGreen"
      >
        About
      </h1>

      <div ref={contentRef} className="opacity-0">
        {aboutContent.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm lg:text-base font-jetbrains text-vibrantTextGreen leading-6 lg:leading-7"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
