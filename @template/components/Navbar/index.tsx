"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import CustomImage from "../CustomImage";
import Link from "next/link";

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
    name: "Gallery",
    link: "",
  },
  {
    name: "About",
    link: "",
  },
];

const NextNavbar = ({
  transparent,
  bgColor,
  disabled,
  excludeList = true,
  excludeIcon,
  navbarStyles,
  sticky,
  useReactScroll = false,
  headerText,
  useSearch = true,
  onSearchChange,
  placeHolderText,
  searchBarStyles,
  useSearchIcon,
  IconNavigateTo,
  useResponsive = true,
}: navbarProps) => {
  return (
    <>
      <nav
        className={`flex w-full ${
          bgColor || "bg-gray-950"
        }  min-h-20 h-20 justify-center items-center align-middle overflow-hidden pr-2 pl-2 md:pr-16 md:pl-16 ${
          sticky ? "sticky" : ""
        } ${
          transparent ? "bg-current" : bgColor || "bg-gray-950"
        } ${navbarStyles}`}
      >
        <div
          className={`w-screen md:w-full flex justify-center md:justify-start items-center align-middle gap-6`}
        >
          <Link
            className={`text-white font-bold text-2xl ${
              excludeIcon ? "hidden" : "block"
            }`}
            href={IconNavigateTo || "/"}
          >
            Icon
          </Link>
          <p className="text-white text-xl cursor-pointer">
            {headerText || "Header"}
          </p>
        </div>
        <div
          className={`w-full justify-end items-center align-middle flex`}
          style={{
            display: excludeList && useSearch ? "none" : "flex",
          }}
        >
          <div
            className={`w-full gap-6 justify-center items-center align-middle ${
              useResponsive ? "hidden md:flex" : ""
            } ${excludeList ? "hidden" : "flex"}`}
          >
            {tempList.map((item: any, i: number) => (
              <li
                key={i}
                className={`text-white min-w-16 cursor-pointer list-none font-medium text-lg  hover:text-gray-300 transition duration-300`}
              >
                {item.name}
              </li>
            ))}
          </div>

          {useReactScroll === true ? (
            <nav
              className={` ${useResponsive ? "hidden md:flex lg:flex" : ""} ${
                excludeList ? "hidden" : "flex"
              }`}
            >
              <ul className="flex space-x-4 gap-4 text-white">
                {tempList.map((link: any, i: number) => (
                  <ScrollLink
                    to={link.to}
                    key={link.id + i}
                    className={`text-white min-w-16 cursor-pointer list-none font-medium text-lg hover:text-gray-300 transition duration-300`}
                    smooth={true}
                    duration={500}
                    onClick={() => link?.onLinckClick() && link?.onLinckClick()}
                  >
                    {link.text}
                  </ScrollLink>
                ))}
              </ul>
            </nav>
          ) : null}

          {useSearch ? (
            <div
              className={`ml-6 w-full ${
                useResponsive ? "hidden md:block" : ""
              }`}
            >
              <SearchInput
                onSearchChange={onSearchChange}
                placeHolderText={placeHolderText}
                searchBarStyles={searchBarStyles}
                useSearchIcon={useSearchIcon}
              />
            </div>
          ) : null}

          <div
            className={`ml-6 w-full flex gap-4 h-full ${
              useResponsive ? "hidden md:flex" : ""
            }`}
          >
            <CustomImage
              image={""}
              alt="Profile"
              className="outline-none rounded-full border border-gray-400 p-2"
              optimizeImage={false}
              blurDataURL=""
              fetchPriority="auto"
              havePriority={false}
              imageQuality={100}
              loadingEase="lazy"
            />
            <CustomImage
              image={""}
              alt="Profile"
              className="outline-none rounded-full border border-gray-400 p-2"
              optimizeImage={false}
              blurDataURL=""
              fetchPriority="auto"
              havePriority={false}
              imageQuality={100}
              loadingEase="lazy"
            />
            <CustomImage
              image={""}
              alt="Profile"
              className="outline-none rounded-full border border-gray-400 p-2"
              optimizeImage={false}
              blurDataURL=""
              fetchPriority="auto"
              havePriority={false}
              imageQuality={100}
              loadingEase="lazy"
            />
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
  excludeList?: boolean;
  navbarStyles?: string;
  useReactScroll?: boolean;
  headerText?: string;
  useSearch?: boolean;
  placeHolderText?: string;
  useSearchIcon?: boolean;
  searchBarStyles?: string;
  onSearchChange?: (x: any) => void;
  IconNavigateTo?: string;
  useResponsive?: boolean;
}

const SearchInput = ({
  placeHolderText,
  useSearchIcon = true,
  searchBarStyles,
  onSearchChange,
}: SearchInputProps) => {
  return (
    <div
      className={`w-full flex p-3 rounded-full border bg-gray-900 ${searchBarStyles}`}
    >
      <input
        type="search"
        className="flex w-full text-sm text-gray-200 bg-gray-900 border-none outline-none"
        placeholder={placeHolderText || "search here..."}
        required={false}
        style={{ WebkitAppearance: "none", appearance: "none" }}
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
      />
      {useSearchIcon ? (
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:scale-105 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      ) : null}
    </div>
  );
};

interface SearchInputProps {
  placeHolderText?: string;
  useSearchIcon?: boolean;
  searchBarStyles?: string;
  onSearchChange?: (x: any) => void;
}
