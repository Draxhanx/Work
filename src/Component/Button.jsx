import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (

    <div className="btndiv relative w-40 px-4 py-2 flex items-center justify-between rounded-full bg-zinc-200">
        <span className="btn text-sm  transition-all duration-300 text-black font-medium  ">
            {title}
        </span>

        <IoIosReturnRight color='black' />

    </div>
  ) 
}

export default Button;
