import StarWarsLogo2 from "/StarWarsLogo2.png";
import { PopoverDemo } from "./popover";

export const Header = () => {
  return (
    <div className="h-16 w-screen bg-header flex justify-around ">
      <div className="py-1">
        <img src={StarWarsLogo2}></img>
      </div>
      <div className="text-white font-roboto text-5xl font-semibold py-1">
        Star Glossary
      </div>
      <div>
        <PopoverDemo />
      </div>
    </div>
  );
};
