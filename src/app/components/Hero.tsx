/** @format */
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <main className="flex flex-col lg:px-20 px-10 py-10 gap-6  lg:items-start items-center">
      <div className="lg:flex-row flex flex-col lg:items-start items-center justify-between w-full gap-16">
        <div className="flex flex-col gap-8 lg:pt-20 lg:items-start items-center ">
          <div className="flex flex-col gap-4 lg:w-96 lg:items-start items-center">
            <p className="text-xs px-2.5 py-1 border rounded-full text-foreground/80 w-fit">
              Ride in 15 minutes.
            </p>
            <h1 className="lg:text-4xl text-3xl lg:text-left text-center w-fit">
              Rent Motorcycles for Instant Adventures
            </h1>
            <p className="text-sm lg:text-left text-center w-full lg:px-0 text-muted-foreground">
              Book your motorcycle online and enjoy a quick, easy rental
              process. Get on the road in just 15 minutes.
            </p>
          </div>
          <div>
            <a href="#selection" className="scroll-smooth">
              <Button className="gap-2 w-fit ">
                Book Now <IoIosArrowForward />
              </Button>
            </a>
          </div>
        </div>
        <Image className="sm:scale-100 "  alt="bike image" src={"/bike1.png"} width={518} height={400} />
      </div>
      <ul className="sm:w-full w-fit flex justify-between list-disc text-foreground/80	text-xs sm:flex-row px-8 py-2 border rounded gap-2 flex-col ">
         <li>Quick booking process</li>
         <li>Variety of motorcycles</li>
         <li>Fast delivery</li>
         <li>Affordable pricing</li>
      </ul>
    </main>
  );
}
