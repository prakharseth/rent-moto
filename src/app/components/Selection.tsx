/** @format */

import Image from "next/image";
import { DatePickerForm } from "./extras/DatePicker";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Selection() {
  return (
    <div id="selection" className="border-y flex flex-col sm:flex-row  justify-between sm:px-20 px-8 py-10  items-center">
      <div className="flex flex-col h-full gap-7 ">
        <p className="text-2xl text-medium sm:text-start text-center">Select Dates and Location</p>
        <div className="flex flex-col sm:flex-row gap-5 sm:items-end items-center">
          <div className="flex sm:flex-row gap-5 flex-col w-full">
            <DatePickerForm />
            <div className="flex flex-col gap-2 sm:w-[240px]  w-full">
              <Label htmlFor="text">Pick-up Location</Label>
              <Input type="text" id="text" placeholder="Your Location" />
            </div>
          </div>
          <a href="#bike-selection">
            <Button className="sm:w-fit w-full" type="submit">Submit</Button>
          </a>
        </div>
      </div>
      <Image alt="calendar" src={"/calendar.png"} width={200} height={200} />
    </div>
  );
}
