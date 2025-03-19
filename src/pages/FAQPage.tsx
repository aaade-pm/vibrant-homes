import React from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "What is the check-in and check-out time?",
    answer: (
      <>
        <p>
          <strong>Check-in:</strong> Our standard check-in time is 3:00 PM.
          However, we offer flexible check-in options if the apartment is
          available earlier. Please contact us in advance to arrange an early
          check-in.
        </p>
        <p className="mt-2">
          <strong>Check-out:</strong> Our standard check-out time is 11:00 AM.
          Late check-out can be arranged upon request and is subject to
          availability. Please let us know if you require a late check-out.
        </p>
      </>
    ),
  },
  {
    question: "Is Wi-Fi available in all apartments?",
    answer: (
      <p>
        Yes, all our apartments come with complimentary high-speed Wi-Fi. You
        will receive the Wi-Fi network name and password upon check-in.
      </p>
    ),
  },
  {
    question: "Are pets allowed in the apartments?",
    answer: (
      <p>
        We understand that pets are part of the family, and we welcome
        well-behaved pets in some of our apartments. Please check the individual
        listing on our Airbnb profile for pet policies or contact us directly to
        confirm if your chosen apartment is pet-friendly.
      </p>
    ),
  },
  {
    question: "What is the cancellation policy?",
    answer: (
      <>
        We offer a flexible cancellation policy to accommodate your travel
        plans:
        <ul className="list-disc space-y-4 ml-10 mr-4 my-8 text-sm lg:text-base">
          <li>
            Full refund for cancellations made within 48 hours of booking,
            provided the check-in date is at least 14 days away.
          </li>
          <li>
            50% refund for cancellations made at least 7 days before check-in.
          </li>
          <li>No refund for cancellations made within 7 days of check-in.</li>
        </ul>
        For specific details, please refer to the cancellation policy on the
        Airbnb listing for the apartment you are booking.
      </>
    ),
  },
  {
    question: "Are cleaning services provided during my stay?",
    answer: (
      <p>
        Our apartments are professionally cleaned before your arrival, and a
        one-time cleaning fee is included in your booking. For stays longer than
        a week, we offer optional additional cleaning services at an extra
        charge. Please contact us to schedule additional cleanings during your
        stay.
      </p>
    ),
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full text-vibrantGreen font-jetbrains">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 font-bold font-ojuju">
        FAQs
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              className="w-full flex place-items-center gap-3 py-2 text-left text-sm lg:text-base font-jetbrains font-bold focus:outline-none"
              onClick={() => handleToggleFaq(index)}
            >
              {openIndex === index ? (
                <BiSolidDownArrow />
              ) : (
                <BiSolidRightArrow />
              )}
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-sm lg:text-base font-jetbrains mb-6 leading-6 lg:leading-7 pt-4 border-vibrantTextGreen">
                {faq.answer}
              </div>
            )}
            <hr className="mt-6 border-vibrantTextGreen" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
