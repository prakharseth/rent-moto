/** @format */

import React from "react";

import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./extras/Logo";

export default function Footer() {
  return (
    <div className=" flex flex-col px-10 py-5 items-center gap-6">
      <div className="flex sm:flex-row flex-col w-full justify-between gap-5">
        <Logo />
        <ul className="sm:flex flex flex-col gap-4 sm:flex-row sm:gap-20 text-sm text-muted-foreground center ">
          <li>See Bikes</li>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="flex sm:flex-row flex-col w-full justify-between gap-5   items-center">
        <div className="flex gap-10 sm:justify-center sm:w-fit w-full justify-around">
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaGithub />
        </div>
        <p className="text-sm text-muted-foreground">
          © 2024 Beauty. All rights reserved.
        </p>
      </div>
    </div>
  );
}
