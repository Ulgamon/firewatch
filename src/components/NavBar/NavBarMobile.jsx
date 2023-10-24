import NavLink from "../NavLink/NavLink";

const NavBarMobile = () => {
  return (
    <div className="w-full bg-backgroundBrown pt-48 flex flex-col text-center block md:hidden">
      <div className="font-sans flex flex-col w-full">
        <NavLink
          url="https://www.camposanto.com"
          active={false}
          title="CAMPO SANTO"
        />
      </div>
      <div className="text-sm font-sans flex flex-col">
        <NavLink
          active={false}
          url={"https://quarterly.camposanto.com/"}
          title={"QUARTERLY REVIEW"}
        />
        <NavLink
          active={false}
          url={"https://blog.camposanto.com"}
          title={"DEVELOPMENT BLOG"}
        />
        <NavLink
          active={true}
          url={"https://www.firewatchgame.com"}
          title="FIREWATCH"
        />
      </div>
    </div>
  );
};

export default NavBarMobile;
