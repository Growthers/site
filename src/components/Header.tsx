import { FC, useState } from "react";
import Link from "next/link";
import { Turn as MenuButton } from "hamburger-react";

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

const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
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
        <div className="h-full">
          <MenuButton toggled={isOpen} toggle={setOpen} color="black" />
        </div>
        <div
          className={`
          ${isOpen ? "" : "translate-x-full"}
          fixed top-0 left-[30vw] z-10 h-screen w-[70vw] bg-black transition-all duration-700 ease-in-out text-white overflow-auto
        `}
        >
          <div className="h-12 w-full flex items-center justify-end">
            <MenuButton toggled={isOpen} toggle={setOpen} color="white" size={24} />
          </div>
          <div className="px-10">
            {menu.map((value) => (
              <Link key={value.name} href={value.link}>
                <a>
                  <p className="p-2 mb-2 text-lg text-white hover:border-b-2 border-orange-400">{value.name}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
