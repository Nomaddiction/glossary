import StarWarsLogo2 from "/public/StarWarsLogo2.png";

export const Header = () => {
  return (
    <div className="h-16 w-screen bg-header flex justify-between">
      <div>
        <img src={StarWarsLogo2}></img>
      </div>
      <div className="text-white font-sans not-italic">Star Glossary</div>
      <div className="text-white">test</div>
    </div>
  );
};
