import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="w-full  lg:max-w-screen-xl py-6 flex items-center border-b-[1px] border-zinc-700 justify-between lg:mx-auto">
      <div className="mx-5 lg:mx-0  flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-16   ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-100"></span>
            ) : (
              <a className="hidden   lg:flex  items-center" href="#">
                {index === 1 && (
                  <span className="inline-block w-1 h-1  bg-green-500 rounded-full gap-1"></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <div className="hidden lg:block" >
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
