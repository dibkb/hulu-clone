import React from "react";
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Icons from "./HeaderComponents/Icons";
const Header = () => {
  return (
    <header className="w-100 m-5 flex flex-col sm:flex-row justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Icons title={"Home"} ICON={HomeIcon} />
        <Icons title={"Trending"} ICON={BoltIcon} />
        <Icons title={"Verified"} ICON={CheckBadgeIcon} />
        <Icons title={"Collections"} ICON={RectangleStackIcon} />
        <Icons title={"Search"} ICON={MagnifyingGlassIcon} />
        <Icons title={"User"} ICON={UserIcon} />
      </div>
      <p className="text-4xl font-bold sm:self-start hover:cursor-pointer hover:text-white">
        HULU
      </p>
    </header>
  );
};

export default Header;
