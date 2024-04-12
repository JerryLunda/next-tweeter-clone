import React from "react";
import Image from 'next/image';
import NavLinks from "./navLink";
import icon_plus from "../../public/icon_plus.svg"

function SideNav() {
  return (
    <>
      <NavLinks />
      <button className="w-56 h-12 bg-[#1DA1F2] rounded-3xl text-white my-6 hidden md:block" type="button">Tweet</button>
      <Image src={icon_plus} alt="post icon" className="w-12 h-12 bg-[#1DA1F2] rounded-full text-white my-6 md:hidden" />
    </>
  );
}

export default SideNav;
