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
    <div className="flex h-20 items-center justify-around py-4 md:justify-start">
      <div className="flex h-full md:ml-8">
        <img src="growthers.png" alt="Growthers" className="rounded-full" />
        <p className="ml-2 flex items-center text-3xl font-semibold">Growthers</p>
      </div>
      <div className="ml-20 hidden items-center md:flex">
        {menu.map((value) => (
          <Link key={value.name} href={value.link}>
            <a>
              <p className="mx-2 border-orange-400 p-2 text-lg hover:border-b-2">{value.name}</p>
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
          fixed top-0 left-[30vw] z-10 h-screen w-[70vw] overflow-auto bg-black text-white transition-all duration-700 ease-in-out
        `}
        >
          <div className="flex h-12 w-full items-center justify-end">
            <MenuButton toggled={isOpen} toggle={setOpen} color="white" size={24} />
          </div>
          <div className="px-10">
            {menu.map((value) => (
              <Link key={value.name} href={value.link}>
                <a>
                  <p className="mb-2 border-orange-400 p-2 text-lg text-white hover:border-b-2">{value.name}</p>
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
