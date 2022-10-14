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
      className={`w-60 lg:w-80 h-full bg-aside-white border-r-2 border-gray-200 overflow-y-auto flex flex-col items-center py-5 transition-all fixed -left-60 lg:-left-80 ${
        showAside && "left-0 lg:left-0"
      }`}
    >
      {/* nav toggler */}
      <button
        type="button"
        className={`w-[45px] h-10 border-gray-300 border-[1px] rounded-sm transition-all bg-aside-white grid place-items-center cursor-pointer text-color-pink fixed left-[250px] lg:left-[330px] ${
          showAside || "left-[10px] lg:left-[10px]"
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
          <a className="text-4xl lg:text-5xl leading-none tracking-tigh font-bold before:h-6 before:w-6 before:bg-transparent before:block before:absolute before:border-t-4 before:border-l-4 before:left-0 before:-top-1 before:border-color-pink after:h-6 after:w-6 after:bg-transparent after:block after:absolute after:right-0 after:border-b-4 after:border-r-4 after:-bottom-[6px] after:border-color-pink">
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
            <Link href="/tag/html-css">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiHtml5 />
                </span>
                html/css
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/tag/javascript">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiJavascript />
                </span>
                javascript
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/tag/typescript">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiTypescript />
                </span>
                typescript
              </a>
            </Link>
          </li>

          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/tag/nextjs">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiNextdotjs />
                </span>
                nextJS
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/tag/reactjs">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiReact />
                </span>
                reactJS
              </a>
            </Link>
          </li>
          <li
            className="border-b-[1px] border-gray-200"
            onClick={() => setShowAside(false)}
          >
            <Link href="/tag/redux">
              <a className="capitalize lg:text-lg font-semibold leading-[40px] lg:leading-[45px] flex items-center gap-x-3 transition-all hover:translate-x-1 hover:text-color-pink">
                <span className="text-[15px] lg:text-[17px]">
                  <SiRedux />
                </span>
                redux
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* copy rights */}
      <div className=" w-3/4">
        <p className="text-xs lg:text-[14px] text-[#7d7d7d]">
          Copyright 2022 &copy; Tolgahan Tolu
        </p>
      </div>
    </aside>
  );
};

export default Aside;
