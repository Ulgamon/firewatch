const NavLink = (props) => {
  return (
    <a
      className={
        "font-bold text-lightYellow pt-2 p-1 px-2 " +
        (props.active ? "bg-navActive" : " hover:bg-navHover")
      }
      href={props.url}
    >
      {props.title}
    </a>
  );
};

export default NavLink;
