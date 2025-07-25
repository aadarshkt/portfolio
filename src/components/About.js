import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl lg:text-5xl xl:text-6xl text-black dark:text-white font-[poppins] font-semibold">About</p>
      <div className="flex lg:flex-row flex-col w-full h-full items-center">
        <div className="flex justify-center lg:justify-start  w-full lg:w-2/3 xl:w-full">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_m9lwcxrc.json"
            style={{
              height: "80%",
              width: "100%",
            }}>
            <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
        </div>
        <div className="flex bg-white dark:bg-gray-900 lg:w-1/2 w-full rounded-3xl p-10 m-10 shadow-xl">
          <p className="lg:text-xl xl:text-2xl text-black dark:text-white font-[poppins] font-light">
            Welcome to my portfolio, I am <b>Aadarsh Kumar Tiwari</b>, Software engineer at <b>KPIT</b>.
            <br />
            <br />
            I love to code and work on projects that make a difference. I think that digital superintelligence is the
            next step of evolution.
            <br />
          </p>
        </div>
      </div>
      <hr className="mx-auto w-1/4 h-1 bg-gray-100 dark:bg-gray-900 rounded border-0" />
    </div>
  );
};

export default About;
