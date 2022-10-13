import React, { useState } from "react";
import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { MdMenu, MdClose } from "react-icons/md";

const Aside = () => {
  const [showAside, setShowAside] = useState(false);

  return (
    <aside
      className={`w-60 h-full bg-aside-white border-r-2 border-gray-200 overflow-y-auto flex flex-col items-center py-5 transition-all fixed -left-60 ${
        showAside && "left-0"
      }`}
    >
      {/* nav toggler */}
      <button
        type="button"
        className={`w-[45px] h-10 border-gray-300 border-[1px] rounded-sm transition-all bg-aside-white grid place-items-center cursor-pointer text-color-pink fixed left-[250px] ${
          showAside || "left-[10px]"
        }  `}
        onClick={() => setShowAside(!showAside)}
      >
        {showAside ? <MdClose size={35} /> : <MdMenu size={35} />}
      </button>

      {/* logo */}
      <div
        className=" text-center w-3/4 relative mt-3"
        onClick={() => setShowAside(false)}
      >
        <Link href="/">
          <a className="text-4xl leading-none tracking-tigh font-bold before:h-6 before:w-6 before:bg-transparent before:block before:absolute before:border-t-4 before:border-l-4 before:left-0 before:-top-1 before:border-color-pink after:h-6 after:w-6 after:bg-transparent after:block after:absolute after:right-0 after:border-b-4 after:border-r-4 after:-bottom-[6px] after:border-color-pink">
            Tolgahan
          </a>
        </Link>
      </div>
      {/* aside links */}
      <nav className=" flex-1 flex items-center w-3/4">
        <ul className="w-full">
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiHtml5 size={15} />
                html/css
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiJavascript size={15} />
                javascript
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiTypescript size={15} />
                typescript
              </a>
            </Link>
          </li>

          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiNextdotjs size={15} />
                nextJS
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiReact size={15} />
                reactJS
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/">
              <a className="capitalize font-semibold leading-[40px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <SiRedux size={15} />
                redux
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* copy rights */}
      <div className=" w-3/4">
        <p className="text-xs text-[#7d7d7d]">
          Copyright 2022 &copy; Tolgahan Tolu
        </p>
      </div>
    </aside>
  );
};

export default Aside;
