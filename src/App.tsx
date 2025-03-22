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

  const animationPlayed = React.useRef(false);

  React.useEffect(() => {
    if (animationPlayed.current) return;
    const tl = gsap.timeline();

    // Animate Heading Text
    if (splitTextRef.current) {
      const splitHeading = new SplitType(splitTextRef.current, {
        types: "chars",
      });
      tl.from(splitHeading.chars, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    }

    // Animate Nav Text
    if (navSplitTextRef.current) {
      const splitNav = new SplitType(navSplitTextRef.current, {
        types: "chars",
      });
      tl.from(
        splitNav.chars,
        {
          y: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        ">"
      );
    }

    // Animate Tagline Text
    if (taglineRef.current) {
      const splitTagline = new SplitType(taglineRef.current, {
        types: "words",
      });
      tl.from(
        splitTagline.words,
        {
          x: -100,
          autoAlpha: 0,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: "end",
          },
          ease: "power2.out",
        },
        "-=0.2"
      );
    }

    animationPlayed.current = true;
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
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-vibrantTextGreen font-bold"
                          : "text-vibrantNeutral"
                      } hover:translate-x-10 transition-all duration-300`
                    }
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
