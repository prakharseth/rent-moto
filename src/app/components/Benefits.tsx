/** @format */

import React from "react";
import BenefitCard from "./extras/BenefitCard";
import { PiTimer,PiMapPin } from "react-icons/pi";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";

export default function Benefits() {
  return (
    <div className=" border-y flex flex-col lg:flex-row  justify-between px-20 sm:py-20 py-10  gap-5 w-full h-full">
      <BenefitCard
        title="Same Time"
        desc="Get your rental bike within 15 minutes."
        icon={<PiTimer/>}
      />
      <BenefitCard
        title="Variety of Bikes"
        desc="Choose from sportbikes, cruisers, and scooters."
        icon={<RiCheckboxMultipleBlankFill/>}
      />
      <BenefitCard
        title="Available in 102 Cities"
        desc="Find rental locations in 102 cities nationwide."
        icon={<PiMapPin/>}
      />
      <BenefitCard
        title="Plan Day and Ride Anytime"
        desc="Book now and ride whenever you want."
        icon={<FiCalendar/>}
      />
    </div>
  );
}
