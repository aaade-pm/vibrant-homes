import React from "react";

type CityRate = {
  city: string;
  low: string;
  mid: string;
  high: string;
};

const ratesData: CityRate[] = [
  {
    city: "Ikeja",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Iyanapaja",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Lekki",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Maryland",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Fadeyi",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Ikoyi",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Bourdillon",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
  {
    city: "Banana Island",
    low: "$180 PER NIGHT",
    mid: "$250 PER NIGHT",
    high: "$300 PER NIGHT",
  },
];

const RatesPage: React.FC = () => {
  return (
    <section className="w-full text-vibrantTextGreen pb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 font-bold font-ojuju text-vibrantGreen">
        Rates
      </h1>
      <p className="text-sm lg:text-base font-jetbrains mb-6 leading-6 lg:leading-7">
        At Vibrant Homes, we strive to provide exceptional value for our guests
        while maintaining the highest standards of comfort and style. Our rates
        vary depending on the location, season, and length of stay. Below you’ll
        find a general overview of our pricing. For specific dates and
        availability, please visit the individual listings on our Airbnb page.
      </p>

      <div className="bg-yellow-400 p-6 text-sm font-jetbrains mb-18">
        Applicable to all our homes:{" "}
        <span className="font-bold">Weekly Discount:</span> 10% off |{" "}
        <span className="font-bold">Monthly Discount:</span> 20% off
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {ratesData.map(({ city, low, mid, high }) => (
          <div
            key={city}
            className="bg-vibrantGreen text-vibrantNeutral px-6 py-8 flex flex-col gap-6 justify-between"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-ojuju">
              {city}
            </h2>
            <div className="space-y-6 font-jetbrains text-sm lg:text-base">
              <p>
                <strong>LOW SEASON (JAN–MAR):</strong> <br />
                {low}
              </p>
              <p>
                <strong>MID SEASON (APR–MAY, SEP–NOV):</strong> <br />
                {mid}
              </p>
              <p>
                <strong>HIGH SEASON (JUN–AUG, DEC):</strong> <br />
                {high}
              </p>
            </div>
            <button className="mt-6  border border-vibrantNeutral px-4 py-2 font-jetbrains hover:bg-vibrantNeutral hover:text-vibrantGreen transition-all">
              Book on Airbnb
            </button>
          </div>
        ))}
      </div>

      <section className="w-full font-jetbrains">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-bold font-ojuju text-vibrantGreen">
          Additional Information
        </h2>

        <ul className="list-disc space-y-4 ml-5 text-sm lg:text-base">
          <li>
            <strong>Cleaning Fee:</strong> A one-time cleaning fee of $50/€50
            applies to all bookings.
          </li>
          <li>
            <strong>Security Deposit:</strong> A refundable security deposit of
            $200/€200 is required at check-in.
          </li>
          <li>
            <strong>Taxes:</strong> Rates are exclusive of local taxes and fees,
            which vary by location.
          </li>
          <li>
            <strong>Cancellation Policy:</strong> Full refund for cancellations
            made within 48 hours of booking, provided the check-in date is at
            least 14 days away. 50% refund for cancellations made at least 7
            days before check-in. No refund for cancellations made within 7 days
            of check-in.
          </li>
        </ul>

        <p className="mt-8 text-sm lg:text-base leading-6 lg:leading-7">
          For the most accurate rates and availability, please visit our{" "}
          <a
            href="/"
            className="underline text-vibrantGreen hover:text-vibrantTextGreen"
          >
            Airbnb profile
          </a>{" "}
          and select your preferred dates and apartment. <br />
          Thank you for choosing Vibrant Homes for your stay!
        </p>
      </section>
    </section>
  );
};

export default RatesPage;
