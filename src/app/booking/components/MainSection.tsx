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
      <div className="flex flex-col  gap-5 sm:w-fit w-full">
        <p className="text-2xl text-medium ">Booking Details</p>
        <div className="flex flex-col gap-4 border rounded-lg p-4">
          <p className="text-muted-foreground">Customer Information</p>
          {/* 1st row */}
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">Name</Label>
              <Input
                type="text"
                id="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">Last Name</Label>
              <Input type="text" id="text" placeholder="Enter your Last Name" />
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">E-mail</Label>
              <Input
                type="text"
                id="text"
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">Phone Number</Label>
              <Input
                type="text"
                id="text"
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">Zip Code</Label>
              <Input type="text" id="text" placeholder="Enter your Zip Code" />
            </div>
            <div className="sm:w-[240px] flex flex-col gap-2">
              <Label htmlFor="text">Address</Label>
              <Input type="text" id="text" placeholder="Enter your Address" />
            </div>
          </div>

          {/* End of Input_____________ */}
          <Button className="gap-2 w-fit" variant="secondary">
            Save <LuBadgeCheck />
          </Button>
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
        <div className="flex  gap-3 justify-between items-end border rounded-lg p-5">
          <div className="flex flex-col gap-3">
            <p className="">Total Amount</p>
            <p className="text-2xl">₹1,200</p>
          </div>
          <a href="./summary">
            <Button className="gap-2 w-fit ">
              Checkout <IoIosArrowForward />
            </Button>
          </a>
        </div>
        {/* Bottom Card End*/}
      </div>
    </main>
  );
}
