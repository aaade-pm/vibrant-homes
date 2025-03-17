import React from "react";

type HomeData = {
  location: string;
  image: string;
  link: string;
};

const homes: HomeData[] = [
  {
    location: "Ikeja",
    image:
      "https://images.unsplash.com/photo-1678585696331-8cc67017f1b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "ikeja",
  },
  {
    location: "Iyanapaja",
    image:
      "https://images.unsplash.com/photo-1730620025652-f173d5f32d57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYSUyMGhvdXNlfGVufDB8fDB8fHww",
    link: "iyanapaja",
  },
  {
    location: "Lekki",
    image:
      "https://images.unsplash.com/photo-1638427067705-457b6480ed2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnZXJpYSUyMGhvdXNlfGVufDB8fDB8fHww",
    link: "lekki",
  },
  {
    location: "Maryland",
    image:
      "https://images.unsplash.com/photo-1673788747830-5f7c0780a0c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "maryland",
  },
  {
    location: "Fadeyi",
    image:
      "https://images.unsplash.com/photo-1675583131012-cf223c3f5063?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "fadeyi",
  },
  {
    location: "Ikoyi",
    image:
      "https://images.unsplash.com/photo-1661332628377-1e2f427930fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "ikoyi",
  },
  {
    location: "Bourdillon",
    image:
      "https://images.unsplash.com/photo-1661332626638-f60fc1e9cc09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "bourdillon",
  },
  {
    location: "Banana Island",
    image:
      "https://images.unsplash.com/photo-1714669257298-7eb2672fa461?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdlcmlhJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    link: "banana-island",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <main className="w-full">
        <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 py-6">
          {homes.map((home) => (
            <div
              key={home.location}
              style={{
                backgroundImage: `url(${home.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full h-75 relative"
            >
              <div className="h-full w-full bg-black/32">
                <button className="absolute top-6 left-6 border-2 border-vibrantNeutral text-vibrantNeutral font-bold cursor-pointer p-2 font-jetbrains">
                  {home.location}
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
