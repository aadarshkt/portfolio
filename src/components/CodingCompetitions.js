import React from "react";
import LinkIcon from "../assets/LinkIcon";

const data = [
  {
    key: 1,
    name: "Codeforces",
    rating: "1364",
    problemsSolved: "400+",
    link: "https://codeforces.com/profile/aadarshkt",
  },
  {
    key: 2,
    name: "Leetcode",
    rating: "1764",
    problemsSolved: "180+",
    link: "https://leetcode.com/aadarshkt/",
  },
  {
    key: 3,
    name: "Codechef",
    rating: "1543",
    problemsSolved: "50+",
    link: "https://www.codechef.com/users/aadarshkt",
  },
  {
    key: 4,
    name: "Atcoder",
    rating: "1165",
    problemsSolved: 158,
    link: "https://atcoder.jp/users/aadarshkt",
  },
];

const projects = [
  {
    key: 3,
    name: "QR-based Student Access App",
    description: "A react native app to enable students in college to access campus facilities by scanning QR code",
    link: "https://github.com/aadarshkt/scanx_client",
  },
  {
    key: 1,
    name: "Company Registration Portal",
    description: "Implemented CRUD functionality for job/intern postings and integration with Node.js backend.",
    link: "https://github.com/aadarshkt/CDC-company-portal",
  },
  {
    key: 4,
    name: "Library management application",
    description:
      "A web application to manage books in a library. Books with their ISBN number can be created, read, updated, deleted in MySQL database using the application",
    link: "https://github.com/aadarshkt/library_client",
  },
  {
    key: 2,
    name: "Solar Flare Detection ML UI",
    description: "Co-developed UI for a website to detect solare flare in x-ray data.",
    link: "https://github.com/aadarshkt/inter_iit",
  },
];

const CodingCompetitions = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <p className="lg:text-5xl text-3xl xl:text-6xl font-[poppins] font-semibold dark:text-white">Sport Programming</p>
      <div className="flex w-full grid grid-cols-2 lg:grid-cols-4  sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-10 mb-20">
        {data.map((platform) => (
          <CodingCard
            className="flex flex-col"
            key={platform.key}
            name={platform.name}
            rating={platform.rating}
            problemsSolved={platform.problemsSolved}
            link={platform.link}
          />
        ))}
      </div>
      <p className="lg:text-5xl text-3xl xl:text-6xl font-[poppins] font-semibold dark:text-white">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 lg:gap-20 mt-10 mb-10">
        {projects.map((project) => (
          <ProjectsList key={project.key} name={project.name} description={project.description} link={project.link} />
        ))}
      </div>
    </div>
  );
};

const CodingCard = ({ name, rating, problemsSolved, link }) => {
  return (
    <div className="relative flex flex-col shadow-xl text-md xl:text-xl w-full h-full bg-white rounded-3xl font-[poppins] text-bold p-8 dark:bg-gray-900">
      <a href={link} className="absolute top-8 right-8 text-blue-600" target="_blank" rel="noopener noreferrer">
        <LinkIcon className="w-6 h-6" />
      </a>
      <div className="dark:text-white">
        <ul>
          <li>
            <p className="font-semibold">{name}</p>
          </li>
          <li>Rating: {rating}</li>
          <li>Problems Solved: {problemsSolved}</li>
        </ul>
      </div>
    </div>
  );
};

const ProjectsList = ({ name, description, link }) => {
  return (
    <div className="relative text-gray-800 flex shadow-xl text-md xl:text-xl rounded-3xl p-10 dark:bg-gray-900">
      <a href={link} className="absolute top-10 right-10 text-blue-600" target="_blank" rel="noopener noreferrer">
        <LinkIcon className="w-6 h-6" />
      </a>
      <div className="dark:text-white">
        <p className="font-semibold font-[poppins]">{name}</p>
        <ul className="list-disc list-inside">
          <li className="text-wrap">{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default CodingCompetitions;
