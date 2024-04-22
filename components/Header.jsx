"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMene] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  const controlNav = ()=>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrolly && !mobileMenu){
        setShow("-translate-y-[80px]")
      }
      else{
        setShow("shadow-md")
      }
    }
    else{
      setShow("translate-y-0")
    }
    setLastScrolly(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll",controlNav);
    return ()=>{
      window.removeEventListener("scroll",controlNav)
    }
  },[lastScrolly])
  return (
    <header
      className={`bg-white w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-30 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMene={setShowCatMene} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMene={setShowCatMene}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center justify-center">
          {/* Mobile icon start  */}
          <div className="md:hidden flex items-center justify-center gap-1 hover:bg-black/[0.05] w-8 md:w-12 h-8 md:h-12 rounded-full cursor-pointer relative -m-1">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[15px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end  */}

          {/* icon start  */}
          <Link href="/cart">
          <div className="flex items-center justify-center gap-1 hover:bg-black/[0.05] w-8 md:w-12 h-8 md:h-12 rounded-full cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px] " />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-2-[18px] absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] flex justify-center text-white items-center px-[2px] md:px-[5px] bg-red-500 rounded-full">
              5
            </div>
          </div>
          </Link>
          {/* icon end  */}

          {/* icon start  */}
          <div className="flex items-center justify-center gap-1 hover:bg-black/[0.05] w-8 md:w-12 h-8 md:h-12 rounded-full cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px] " />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-2-[18px] absolute top-1 left-5 md:left-7 text-[10px] md:text-[12px] flex justify-center text-white items-center px-[2px] md:px-[5px] bg-red-500 rounded-full">
              5
            </div>
          </div>
          {/* icon end  */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
