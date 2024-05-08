"use client"
 
import * as React from "react"

import { TbMotorbike } from "react-icons/tb";
import { ModeToggle } from "./extras/ModeToggle";
import Logo from "./extras/Logo";

export default function Navbar() {
  return (
    <div className=" border-b lg:px-12 px-6 py-4 flex justify-between">
      <Logo/>
      <ModeToggle/>
    </div>
  )
}

