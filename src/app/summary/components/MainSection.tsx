/** @format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LuBadgeCheck } from "react-icons/lu";

export default function MainSection() {
  return (
    <main className="flex flex-col sm:flex-row  sm:justify-between px-10 sm:px-20 py-10 sm:py-20  items-start gap-10">
      <div className="flex flex-col  gap-4 sm:w-fit w-full">
        <p className="text-2xl">Booking Details</p>
        <div className="flex flex-col gap-4  border rounded-lg p-4">
          <p className="text-muted-foreground font-medium">Customer Information</p>
          <div className="flex flex-col gap-3">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-1 text-sm font-medium">
              <p>+91 890****234</p>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-1 text-sm font-medium">
              <p>Prakhar Seth</p>
              <p>sethpr***@gmail.com</p>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-1 text-sm font-medium">
              <p>6th Street, Gandhi Nagar, Kolkata India, 290023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-5 sm:justify-between w-full sm:w-fit ">
        <div className="flex flex-col gap-6">
          <p className="border rounded-full px-2.5 py-1 text-sm w-fit">
            Order Summary
          </p>
          {/* upper card */}
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between gap-2 sm:gap-10 ">
              <div>
                <p>Bajaj Pulsar RS 200</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">₹600 per day</p>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div>
                <p>Sub Total</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">₹600 * 2</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <hr className="" />
              <div className="flex  justify-between gap-2">
                <div>
                  <p>Total</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">₹1,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Card */}

        <div className="border rounded-lg  flex items-center  p-5 gap-3 justify-between  w-full">
          <p className="">Total Amount</p>
          <p className="text-2xl">₹1,200</p>
        </div>
        {/* Bottom Card End*/}
      </div>
    </main>
  );
}
