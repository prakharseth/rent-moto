/** @format */

import React from "react";
import { PiTimer } from "react-icons/pi";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function BenefitCard({title,desc,icon}:CardData,) {
  return (
    <Card className="h-full w-full">
      <CardHeader className="gap-2">
        <div className="text-4xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

type CardData={title:string,desc:string,icon?:React.ReactNode}

