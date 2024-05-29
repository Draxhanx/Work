import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Center() {
  const [image, setImage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "52%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latest) => {
    function imageShow(arr) {
      setImage((prev)=>{
        return prev.map((items, index)=> arr.indexOf(index)=== -1 ? {...items , isActive:false } : {...items, isActive:true})
    })}

    switch (Math.floor(latest * 100)) {
      case 0:
        imageShow([0]);
        break;
      case 1:
        imageShow([1]);
        break;
      case 3:
        imageShow([1, 2]);
        break;
      case 4:
        imageShow([1, 2, 3]);
        break;
      case 5:
        imageShow([1, 2, 3, 4]);
        break;
      case 6:
        imageShow([1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto text-center relative mb-20 lg:mb-0 ">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="w-full h-full top-0 absolute">
          {image.map(
            (items, index) =>
               items.isActive && (
                <img key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%] "
                  style={{ top: items.top, left: items.left }}
                  src={items.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Center;
