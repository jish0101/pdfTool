import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMode } from "../state";
import {ToggleIcon, Logo, SunAndMoonIcon} from "./index";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const mode = useSelector((state) => state.globalReducer.mode);
  const dispatch = useDispatch();

  return (
    <nav className="flex | gap-5 p-6 items-center md:px-16 dark:bg-dark-200 bg-light-200">
      {/* logo  */}
      <div>
        <Link className="flex items-center" to={"/home"}>
          <Logo />
          <p className='font-bold text-xl pointer-events-none select-none'>.pdf</p>
        </Link>
      </div>
      {/* features  */}
      <div className="hidden ml-8 md:block">
        <ul className="flex | gap-10">
          <li>
            <Link to={"/compress-pdf"}>Compress</Link>
          </li>
          <li>
            <Link to={"/convert-pdf"}>Convert</Link>
          </li>
          <li>
            <Link to={"/merge-pdf"}>Merge</Link>
          </li>
        </ul>
      </div>
      {/* Dark/Light mode icon  */}
      <div className="flex ml-auto md:pr-5 md:border-r-2 ">
        <button onClick={() => dispatch(setMode())}>
          <SunAndMoonIcon mode={mode} />
        </button>
      </div>
      {/* login or signup  */}
      <div className="hidden md:block">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"} className="ml-8 filled">
          Sign Up
        </Link>
      </div>
      <div className="flex md:hidden">
        {/* toggle icon */}
        <button onClick={() => setIsMobileNav(!isMobileNav)}>
          <ToggleIcon isMobileNav={isMobileNav} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
