import NavLink from "../NavLink/NavLink";

const NavBar = () => {
  return (
    <div className="flex invisible sm:visible w-full font-sans z-10 absolute justify-between h-fit bg-backgroundBrown flex-row">
      <div className="flex">
        <NavLink
          url="https://www.camposanto.com"
          active={false}
          title="CAMPO SANTO"
        />
      </div>
      <div className="flex text-sm">
        <NavLink
          active={true}
          url={"https://www.firewatchgame.com"}
          title="FIREWATCH"
        />
        <NavLink
          active={false}
          url={"https://blog.camposanto.com"}
          title={"DEVELOPMENT BLOG"}
        />
        <NavLink
          active={false}
          url={"https://quarterly.camposanto.com/"}
          title={"QUARTERLY REVIEW"}
        />
      </div>
    </div>
  );
};

export default NavBar;
