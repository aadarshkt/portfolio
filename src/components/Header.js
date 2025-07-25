import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="flex flex-row w-full items-center justify-between p-4">
      <div className="flex">
        <p className="text-lg text-black dark:text-white font-[poppins] rounded-md backdrop-blur-sm ml-8 p-2">
          Portfolio
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Header;
