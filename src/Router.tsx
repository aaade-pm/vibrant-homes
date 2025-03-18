import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import { Helmet } from "react-helmet";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const RatesPage = lazy(() => import("./pages/RatesPage"));
const LocationDetails = lazy(() => import("./pages/LocationDetails"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Home - Vibrant Homes®",
    description:
      "Welcome to Vibrant Homes® – where comfort meets style. Discover handpicked homes in the world’s most dynamic cities, designed for travelers, remote workers, and families seeking a unique stay. Explore our curated spaces today!",
  },
  {
    path: "/about",
    element: <AboutPage />,
    title: "About - Vibrant Homes®",
    description:
      "Vibrant Homes® was founded with a mission to redefine modern living. Learn more about our journey, our commitment to excellence, and how we create spaces that feel like home—no matter where you are in the world.",
  },
  {
    path: "/contact",
    element: <ContactPage />,
    title: "Contact - Vibrant Homes®",
    description:
      "Have questions? We’re here to help! Whether you need assistance with bookings, property listings, or special requests, our team is just a message away. Reach out to us today and let’s get started on your perfect stay.",
  },
  {
    path: "/faqs",
    element: <FAQPage />,
    title: "FAQs - Vibrant Homes®",
    description:
      "Got questions? We've got answers! Check out our FAQ section for details on reservations, cancellation policies, amenities, and more. Find everything you need to know about staying with Vibrant Homes®.",
  },
  {
    path: "/rates",
    element: <RatesPage />,
    title: "Rates - Vibrant Homes®",
    description:
      "Explore our flexible and competitive pricing options. Whether you’re looking for a weekend getaway or a long-term stay, Vibrant Homes® offers rates that suit every budget while maintaining top-tier quality and comfort.",
  },
  {
    path: "/:location",
    element: <LocationDetails />,
    title: "Details - Vibrant Homes®",
    description:
      "Discover the best of Vibrant Homes® in this location. From stunning views to luxurious amenities, find everything you need to know about this unique space.",
  },
];

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(({ path, element, title, description }) => ({
      path,
      element: (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          {element}
        </>
      ),
    })),
  },
]);

export default Router;
