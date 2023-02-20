import StarWarsLogo2 from "/StarWarsLogo2.png";

export const Header = () => {
  return (
    <div className="h-16 w-screen bg-header flex justify-around ">
      <div className="py-1">
        <img src={StarWarsLogo2}></img>
      </div>
      <div className="text-white font-roboto text-5xl font-semibold py-1">
        Star Glossary
      </div>
      <div className="text-white font-open text-xl font-light py-4">
        About us
      </div>
    </div>
  );
};
