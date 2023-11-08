"use client";

import React from "react";
import { Input } from "../ui/input";
function Navbar() {
  return (
    <div className="relative border-b border-stone-200 w-full bg-white">
      <div className="flex items-center justify-between max-w-7xl px-2 py-2 mx-auto sm:px-4 lg:px-6">
        <div>
          <h1 className=" font-semibold text-2xl">TaskFlow</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Input type="search" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
