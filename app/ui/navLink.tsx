"use client" 

import Link from "next/link";
import { usePathname } from "next/navigation";
import bookmark_icon from "../../public/bookmark_icon.png";
import explore_icon from "../../public/explore_icon.png";
import home_icon from "../../public/home_icon.png";
import list_icon from "../../public/list_icon.png";
import message_ico from "../../public/message_ico.png";
import notification_icon from "../../public/notification_icon.png";
import profile_ico from "../../public/profile_ico.png";
import tweeter_ico from "../../public/tweeter_ico.png";
import { StaticImageData } from "next/image";

interface NavLink {
  name: string;
  href: string;
  icon: StaticImageData;
  alt: string;
}

const links: NavLink[] = [
  { name: "", href: "/", icon: tweeter_ico, alt: "Twitter" },
  { name: "Home", href: "/", icon: home_icon, alt: "home icon" },
  { name: "Explore", href: "/explore", icon: explore_icon, alt: "Explore" },
  { name: "Notifications", href: "/notification", icon: notification_icon, alt: "Notifications" },
  { name: "Message", href: "/message", icon: message_ico, alt: "Message" },
  { name: "Bookmarks", href: "/bookmark", icon: bookmark_icon, alt: "bookmark" },
  { name: "List", href: "/list", icon: list_icon, alt: "List" },
  { name: "Profile", href: "/profile", icon: profile_ico, alt: "Profile" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="flex p-3 gap-3 items-center">
          <img src={link.icon.src} alt={link.alt} className="size-7" />
          <p className="hidden text-black font-bold md:block ">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
