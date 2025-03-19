import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const imageFromState = location.state?.image;
  const pageRef = React.useRef<HTMLDivElement>(null);
  const splitTextRef = React.useRef<HTMLHeadingElement>(null);
  const navSplitTextRef = React.useRef<HTMLUListElement>(null);
  const taglineRef = React.useRef<HTMLParagraphElement>(null);

  const animateTagline = (tagline: Element | null) => {
    if (!tagline) return;

    const split = new SplitType(tagline as HTMLElement, { types: "words" });

    if (split.words && split.words.length > 0) {
      gsap.fromTo(
        split.words,
        {
          x: -100,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
          delay: 1.6,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: "power2.out",
        }
      );
    }
  };

  const animateSplitText = (splitText: Element | Element[] | null) => {
    if (!splitText) return;
    let elements = splitText;
    if (!Array.isArray(elements)) {
      elements = [elements];
    }
    elements.forEach((el) => {
      const split = new SplitType(el as HTMLElement, { types: "chars" });
      gsap.from(split.chars, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    });
  };

  React.useEffect(() => {
    animateSplitText(navSplitTextRef.current);
    animateSplitText(splitTextRef.current);
    animateTagline(taglineRef.current);
  }, []);

  React.useEffect(() => {
    pageRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <main className="h-full w-full flex flex-col lg:flex-row inset-0 lg:fixed">
      {/* Sidebar Section */}
      <aside
        className="w-full lg:w-1/2 h-[100vh]"
        style={{
          backgroundImage:
            imageFromState !== undefined
              ? `url(${imageFromState})`
              : `url("https://images.unsplash.com/photo-1720436081701-5b692dbe8969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="h-full w-full flex flex-col justify-between p-6 lg:p-10 bg-black/20 text-vibrantNeutral ">
          {/* Logo & Tagline */}
          <div>
            <NavLink to="/">
              <h1
                ref={splitTextRef}
                className="text-2xl sm:text-3xl md:text-4xl mb-3 font-extrabold font-ojuju hover:text-vibrantTextGreen transition-all"
              >
                VIBRANT HOMES®
              </h1>
            </NavLink>
            <p ref={taglineRef} className="text-base font-jetbrains">
              A break from the ordinary.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul
              ref={navSplitTextRef}
              className="flex flex-col gap-2 text-5xl sm:text-6xl md:text-7xl font-bold font-ojuju"
            >
              {["ABOUT", "CONTACT", "FAQS", "RATES"].map((item, i) => (
                <li className="relative group inline-block" key={i}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-vibrantTextGreen hover:ml-5 transition-all block"
                  >
                    {item}
                  </NavLink>
                  <span className="absolute left-0 -bottom-3.5 h-[3px] w-0 bg-vibrantNeutral rounded-3xl transition-all duration-300 group-hover:w-1/2"></span>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </aside>

      {/* Main Content Area */}
      <aside
        ref={pageRef}
        className="w-full lg:w-1/2 h-[100vh] lg:overflow-y-scroll p-6 lg:p-10"
      >
        <Outlet />
      </aside>
    </main>
  );
};

export default App;
