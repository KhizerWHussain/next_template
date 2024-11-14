import React from "react";
import { Link as ScrollLink } from "react-scroll";
import CustomImage from "../CustomImage";

const tempList = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Catalogue",
    link: "",
  },
  {
    name: "About Us",
    link: "",
  },
];

const NextNavbar = ({
  transparent,
  bgColor,
  disabled,
  excludeList,
  excludeIcon,
  excludeSearch,
  navbarStyles,
  sticky,
  useReactScroll = false,
}: navbarProps) => {
  return (
    <>
      <nav
        className={`flex w-full ${
          bgColor || "bg-gray-950"
        }  min-h-20 h-20 justify-center items-center align-middle overflow-hidden pr-2 pl-2 md:pr-16 md:pl-16`}
      >
        <div className="w-full">
          <div className="text-white font-bold text-2xl">Icon</div>
        </div>
        <div>
          <div className="w-full flex gap-6 justify-center items-center align-middle">
            {tempList.map((item: any, i: number) => (
              <li key={i} className="text-white list-none font-medium text-xl">
                {item.name}
              </li>
            ))}
          </div>

          {useReactScroll ? (
            <nav className="hidden md:flex lg:flex">
              <ul className="flex space-x-4 gap-4 text-white">
                {tempList.map((link: any, i: number) => (
                  <ScrollLink
                    to={link.to}
                    key={link.id + i}
                    className="hover:text-primary transition duration-500 text-[20px]"
                    smooth={true}
                    duration={500}
                  >
                    {link.text}
                  </ScrollLink>
                ))}
              </ul>
            </nav>
          ) : null}
          <div>
            <CustomImage image={null} alt="Profile" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NextNavbar;

interface navbarProps {
  transparent?: boolean;
  bgColor?: string;
  sticky?: boolean;
  disabled?: boolean;
  excludeIcon?: boolean;
  excludeSearch?: boolean;
  excludeList?: boolean;
  navbarStyles?: string;
  useReactScroll?: boolean;
}
