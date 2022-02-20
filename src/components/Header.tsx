import type { FC } from "react";
import Link from "next/link";
import { stack as Menu } from "react-burger-menu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const menu = [
  {
    name: "Top",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Members",
    link: "/members",
  },
  {
    name: "Links",
    link: "/links",
  },
];

const MobileMenu: FC = () => (
  <Menu
    right
    noOverlay
    customBurgerIcon={<AiOutlineMenu size={36} />}
    customCrossIcon={<AiOutlineClose color="white" />}
    className="p-8 top-0 bg-black opacity-80"
  >
    {menu.map((value) => (
      <Link key={value.name} href={value.link}>
        <a>
          <p className="p-2 mb-2 text-lg text-white hover:border-b-2 border-orange-400">{value.name}</p>
        </a>
      </Link>
    ))}
  </Menu>
);

const Header: FC = () => (
  <div className="flex justify-around md:justify-start items-center h-20 py-4">
    <div className="h-full flex md:ml-8">
      <img src="growthers.png" alt="Growthers" className="rounded-full" />
      <p className="flex items-center ml-2 text-3xl font-semibold">Growthers</p>
    </div>
    <div className="hidden md:flex items-center ml-20">
      {menu.map((value) => (
        <Link key={value.name} href={value.link}>
          <a>
            <p className="p-2 mx-2 text-lg hover:border-b-2 border-orange-400">{value.name}</p>
          </a>
        </Link>
      ))}
    </div>
    <div className="inline-block md:hidden">
      <MobileMenu />
    </div>
  </div>
);

export default Header;
