import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const App: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const imageFromState = location.state?.image;
  const pageRef = React.useRef<HTMLDivElement>(null);
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-extrabold font-ojuju hover:text-vibrantTextGreen transition-all">
                VIBRANT HOMES®
              </h1>
            </NavLink>
            <p className="text-base font-jetbrains">
              A break from the ordinary.
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-col gap-2 text-5xl sm:text-6xl md:text-7xl font-bold font-ojuju">
              {["ABOUT", "CONTACT", "FAQS", "RATES"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-vibrantTextGreen transition-all"
                  >
                    {item}
                  </NavLink>
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
