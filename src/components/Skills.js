import React from "react";
import CPlusPlus from "../assets/CPlusPlus";
import CSS3 from "../assets/CSS3";
import Express from "../assets/Express";
import HTML5 from "../assets/HTML5";
import Javascript from "../assets/Javascript";
import MongoDB from "../assets/MongoDB";
import TailwindCSS from "../assets/TailwindCSS";
import ReactJS from "../assets/ReactJS";
import NodeJS from "../assets/NodeJS";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <p className="lg:text-5xl text-3xl xl:text-6xl text-gray-800 font-[poppins] font-semibold dark:text-white">Skills</p>
      <div className="flex lg:flex-row flex-col items-center">
        <div className="flex lg:w-2/3 w-full xl:w-full">
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_aibotaxg.json"
            style={{
              height: "100%",
              width: "100%",
            }}>
            <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 xl:w-full">
          <div className="grid grid-cols-3 gap-10 lg:gap-20">
            <div className="bg-gray-100 rounded-full flex justify-center items-center">
              <HTML5 />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <CSS3 />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <Javascript />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <ReactJS />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <NodeJS />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <Express />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <MongoDB />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <TailwindCSS />
            </div>
            <div className="bg-gray-100 rounded-full p-5 lg:p-4">
              <CPlusPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
