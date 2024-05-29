import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var productsData = [
    {
      title: "Ariqtle",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      case: false,
    },
    {
      title: "yahoo",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      case: true,
    },
    {
      title: "ttr",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      case: false,
    },
    {
      title: "yir-2022",
      description:
        " With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(23);

  const mover = (value) => {
    setPos(23 * value);
  };

  console.log(pos);

  return (
    <div className="mt-32 relative">
      {productsData.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}

      <div className="w-full h-full absolute top-0  pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window w-[32%] h-[23rem] overflow-hidden  absolute left-[44%] "
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  "
          >
            
           <video className="w-full h-full rounded-xl" muted autoPlay src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  "
          >
            {" "}
            <video
              className="w-full h-full rounded-xl"
              src="https://cdn.refokus.com/website/2022/videos/yahoo.webm"
              muted
              autoPlay
            ></video>{" "}
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  bg-blue-500"
          >
            {" "}
            <img
              className="w-full h-full rounded-xl"
              src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg"
              alt=""
            />{" "}
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  "
          >
           <video className="w-full h-full rounded-xl" src="https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4" muted autoPlay></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
