/** @format */

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { LuBadgeCheck } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = ['bike1.png', 'bike2.png', 'bike3.png', 'bike4.png'];

export default function BikeSelection() {
  return (
    <div
      id="bike-selection"
      className="border-y flex flex-col sm:flex-row  justify-between sm:px-20 px:10 sm:py-40 py-24 items-center gap-5"
    >
      <div className="flex sm:flex-row flex-col gap-5 sm:items-start items-center">
        <div className="flex flex-col h-full gap-5 sm:items-start items-center">
          <p className="text-2xl text-medium sm:text-start text-center">
            Bajaj Pulsar RS 200
          </p>
          <ul className="list-disc list-inside text-sm flex flex-col gap-2 ">
            <li>Engine Capacity: 199.5cc</li>
            <li>Power Output: 24.5 HP</li>
            <li>Transmission: 6-speed</li>
            <li>ABS: Yes</li>
            <li>Fuel Type: Petrol</li>
          </ul>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">1 Day</SelectItem>
              <SelectItem value="dark">2 Days</SelectItem>
              <SelectItem value="system">3 Days</SelectItem>
              <SelectItem value="system">4 Days</SelectItem>
            </SelectContent>
          </Select>

          <a href="./booking">
            <Button className="gap-2 w-fit ">
              Checkout <IoIosArrowForward />
            </Button>
          </a>
        </div>
        <Button className="gap-2 w-fit" variant="secondary">
          Select <LuBadgeCheck />
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:items-start items-center px-14 sm:px-0 ">
        <p className="border rounded-full px-2.5 py-1 text-sm w-fit">
          ₹3,200 per day
        </p>
        <Carousel className="w-full max-w-xs">
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image 
                  src={`/${image}`} 
                  alt={`Bike ${index + 1}`} 
                  width={400} 
                  height={400} 
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
      </div>
    </div>
  );
}
