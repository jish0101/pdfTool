import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./index";
import Fb from "../svgs/Fb";
import Twitter from "../svgs/Twitter";
import LinkedIn from "../svgs/LinkedIn";
import Instagram from "../svgs/Instagram";

const Footer = () => {
  return (
    <footer className="bg-light-500 dark:bg-dark-500">
      <div className="flex justify-around mb-10 pt-12 flex-col items-center gap-8 text-center md:items-start md:flex-row md:pr-28">
        <div className="flex items-center">
          <Link to={"/home"}>
          <Logo />
          <p className="font-bold pointer-events-none text-xl select-none">
            .pdf
          </p>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-lg">Solutions</h3>
          <Link>Business</Link>
          <Link>Education</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-lg">Company</h3>
          <Link>About</Link>
          <Link>Help</Link>
          <Link>Blog</Link>
        </div>
        <div className="flex flex-col gap-6 text-center">
          <h3 className="font-bold text-lg">Socials</h3>
          <div className="flex gap-4">
            <Link>
              <Fb />
            </Link>
            <Link>
              <Twitter />
            </Link>
            <Link>
              <LinkedIn />
            </Link>
            <Link>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">
          © 2023 .pdf — Made with ♥️ for the people of the internet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
