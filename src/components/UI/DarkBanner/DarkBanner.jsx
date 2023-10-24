import bgLeft from "../../../assets/banner_transparent_left.png";
import bgRight from "../../../assets/banner_transparent_right.png";

const DarkBanner = (props) => {
  return (
    <a className="w-fit hover:bg-white" href={props.url}>
      <h4 className="bg-navActive text-center text-backgroundBrown text-xl font-semibold hover:bg-lightYellow">
        <span
          className="flex px-10 justify-center"
          style={{
            background: `url(${bgLeft}) no-repeat left top / contain, url(${bgRight}) no-repeat right top / contain`,
          }}
        >
          <img className="h-4" src={props.imageUrl} alt={props.imageUrl} />
          <p>{props.title}</p>
        </span>
      </h4>
    </a>
  );
};

export default DarkBanner;
