import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-4 lg:gap-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold font-ojuju text-vibrantGreen">
          Contact
        </h1>
        <section className="bg-vibrantGreen px-6 py-10 xl:px-10 xl:py-20 flex flex-col gap-4 lg:gap-7">
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6">
            {/* <div className="w-full grid grid-cols-2 gap-4 xl:gap-7"> */}
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1720436081701-5b692dbe8969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-35 md:h-50 lg:h-42 xl:h-50 relative"
            ></div>
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1714669257298-7eb2672fa461?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdlcmlhJTIwaG91c2V8ZW58MHx8MHx8fDA%3D")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-35 md:h-50 lg:h-42 xl:h-50 relative"
            ></div>
            {/* </div>
            // <div className=""> */}
            <div
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1661332626638-f60fc1e9cc09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="hidden md:block w-full h-50 lg:h-42 xl:h-50 relative"
            ></div>
            {/* </div> */}
          </div>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1661332626638-f60fc1e9cc09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full md:hidden h-50 relative"
          ></div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl mb-3 font-bold font-ojuju text-vibrantNeutral">
            Got any issues?
          </h1>
          <p className="text-sm lg:text-lg font-jetbrains text-vibrantNeutral leading-6 lg:leading-9">
            Call us at +01 234 567 890 or reach us at{" "}
            <span className="underline">hi@vibranthomes.com</span>.
          </p>
        </section>
      </section>
    </>
  );
};

export default ContactPage;
