import React from "react";
import { Link, useParams } from "react-router-dom";

type LocationDetails = {
  title: string;
  description: string;
  image: string;
  amenities: string[];
  locationInfo: string;
  areaSummary: string;
};

const locationDetails: LocationDetails[] = [
  {
    title: "Ikeja Residence",
    description:
      "A modern home in Ikeja with contemporary design and easy access to urban amenities. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1678585696331-8cc67017f1b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Ikeja",
    areaSummary:
      "Ikeja is the capital city of Lagos State in southwestern Nigeria. Its population, as of the 2006 census, is 313,196. Prior to the emergence of military rule in the early 1980s, Ikeja was a well planned, clean and quiet residential and commercial town with shopping malls, pharmacies and government reservation areas.",
  },
  {
    title: "Iyanapaja Haven",
    description:
      "A comfortable home in Iyanapaja, ideal for families looking for value and convenience. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1730620025652-f173d5f32d57?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYSUyMGhvdXNlfGVufDB8fDB8fHww",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Iyanapaja",
    areaSummary:
      "Iyana-Ipaja is a community and area in Lagos State, Nigeria, specifically a Local Council Development Area (LCDA) under the Alimosho Local Government, known for its commercial environment with restaurants, bars, and leisure places.",
  },
  {
    title: "Lekki Luxury",
    description:
      "Experience premium living in Lekki with top-notch facilities and a vibrant community. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1638427067705-457b6480ed2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnZXJpYSUyMGhvdXNlfGVufDB8fDB8fHww",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Lekki",
    areaSummary:
      "Lekki is a highbrow city located in the south-eastern part of Lagos. You can find it right below the Lagos Lagoon and above the Atlantic Ocean. Now known as one of the most expensive places to live, Lekki was formerly a slum called Maroko.",
  },
  {
    title: "Maryland Home",
    description:
      "A cozy, well-located home in Maryland perfect for peaceful living.This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1673788747830-5f7c0780a0c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Maryland",
    areaSummary:
      "Maryland is one of Lagos older neighborhoods, showcasing a mix of traditional and modern elements. Its development began several decades ago, and many of its original buildings still stand alongside newer constructions. The history of Maryland dates back to 1950 when the missionary sisters of “Our Lady of the Apostles” acquired the land to establish a school, now known as Maryland Comprehensive Secondary School (MCSS). During the land acquisition, a sister named Rev Mother Arcade prayed to the Virgin Mary, a revered figure among Catholics. After successfully securing the land, she named the area “Maryland” in honor of the Virgin Mary. This historical foundation has given Maryland its unique character and charm, reflecting both its rich heritage and ongoing development.",
  },
  {
    title: "Fadeyi Abode",
    description:
      "A charming home in Fadeyi offering comfort and modern living. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1675583131012-cf223c3f5063?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Fadeyi",
    areaSummary:
      "Fadeyi is a locality in Mushin, Lagos State. Fadeyi is situated nearby to the locality Idioro, as well as near the suburb Tinubu.",
  },
  {
    title: "Ikoyi Residence",
    description:
      "A premium residence in Ikoyi known for its upscale amenities and strategic location. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1661332628377-1e2f427930fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Ikoyi",
    areaSummary:
      "Filled with opulent homes and luxury hotels, Ikoyi is centered on Awolowo Road, with its upscale boutiques and artisan bakeries. High-end Nigerian eateries serve dishes such as pepper soup, while resident celebrities frequent chic cocktail bars and clubs. Jazzhole bookstore showcases African art and occasional live Afro music performances, while the National Museum displays traditional pottery and jewelry.",
  },
  {
    title: "Bourdillon Estate",
    description:
      "A serene estate in Bourdillon offering a blend of modern comforts and natural beauty. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1661332626638-f60fc1e9cc09?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG5pZ2VyaWElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Bourdillon",
    areaSummary:
      "Bourdillon is a residential neighbourhood in Ikoyi and also a hub of a few thriving businesses and a few government parastatals. The neighbourhood is serene and highly accessible. The road network here is motorable as Bourdillion is decorated with beautiful street lights. Bourdillion is a renowned highbrow location in Lagos State. The neighbourhood is a popular luxury hub that enjoys sustained property development.",
  },
  {
    title: "Banana Island Luxury",
    description:
      "An exclusive, luxurious property on Banana Island featuring premium facilities. This stylish one-bedroom space is designed with bold colors and modern furniture, offering a dynamic yet comfortable stay. The panoramic city views from the floor-to-ceiling windows are breathtaking.",
    image:
      "https://images.unsplash.com/photo-1714669257298-7eb2672fa461?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdlcmlhJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Fully Equipped Kitchen",
      "24/7 Security",
    ],
    locationInfo: "Banana Island",
    areaSummary:
      "Banana Island is an artificial island off the foreshore of Ikoyi, Lagos, Nigeria. Its name derives from the curvature of its shape. The island is a planned, mixed development with residential, commercial and recreational buildings.",
  },
];

const LocationDetails: React.FC = () => {
  const { location } = useParams<{ location: string }>();

  const normalize = (str: string) =>
    str.toLowerCase().replace(/-/g, " ").trim();

  const locationDetail = locationDetails.find(
    (detail) => normalize(detail.locationInfo) === normalize(location || "")
  );

  const currentIndex = locationDetails.findIndex(
    (detail) => normalize(detail.locationInfo) === normalize(location || "")
  );

  const previousDetail =
    currentIndex > 0 ? locationDetails[currentIndex - 1] : null;
  const nextDetail =
    currentIndex < locationDetails.length - 1
      ? locationDetails[currentIndex + 1]
      : null;

  if (!locationDetail || currentIndex === -1) {
    return (
      <div className="text-center text-xl font-bold">Location not found</div>
    );
  }

  const { title, description, amenities, areaSummary } = locationDetail;
  return (
    <section className="w-full h-screen flex flex-col">
      {/* <div className="w-full h-96 object-cover">
        <img src={image} alt={title} className="w-full h-full" />
      </div> */}
      <div className="w-full flex flex-col gap-4 lg:gap-7">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 font-bold font-ojuju text-vibrantGreen">
          {title}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-bold font-ojuju text-vibrantGreen">
          Description
        </h2>
        <p className="text-sm lg:text-lg font-jetbrains text-vibrantTextGreen leading-6 lg:leading-9">
          {description}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-bold font-ojuju text-vibrantGreen">
          Amenities
        </h2>
        <ul className="text-lg space-y-6 pl-4">
          {amenities.map((amenity) => (
            <li
              key={amenity}
              className="text-sm lg:text-lg font-jetbrains text-vibrantTextGreen leading-6 lg:leading-9 list-disc"
            >
              <span className="ml-3"> {amenity}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 font-bold font-ojuju text-vibrantGreen">
          Location
        </h2>
        <p className="text-sm lg:text-lg font-jetbrains text-vibrantTextGreen leading-6 lg:leading-9">
          {areaSummary}
        </p>
        <div className="flex flex-col lg:flex-row justify-between my-10">
          {previousDetail ? (
            <Link
              to={`/${previousDetail.locationInfo
                .toLowerCase()
                .replace(/ /g, "-")}`}
              state={{ image: previousDetail.image }}
              className="text-lg sm:text-xl md:text-2xl mb-3 font-bold font-ojuju text-vibrantGreen"
            >
              PREVIOUS: {previousDetail.title}
            </Link>
          ) : (
            <Link
              to="/"
              className="text-lg sm:text-xl md:text-2xl mb-3 font-bold font-ojuju text-vibrantGreen"
            >
              Back Home
            </Link>
          )}
          {nextDetail ? (
            <Link
              to={`/${nextDetail.locationInfo
                .toLowerCase()
                .replace(/ /g, "-")}`}
              state={{ image: nextDetail.image }}
              className="text-lg sm:text-xl md:text-2xl mb-3 font-bold font-ojuju text-vibrantGreen"
            >
              NEXT: {nextDetail.title}
            </Link>
          ) : (
            <Link
              to="/"
              className="text-lg sm:text-xl md:text-2xl mb-3 font-bold font-ojuju text-vibrantGreen"
            >
              Back Home
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
