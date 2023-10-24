import bgLeft from "../../../assets/banner_transparent_left.png";
import bgRight from "../../../assets/banner_transparent_right.png";

const LightBanner = (props) => {
  return (
    <a className="w-fit hover:bg-white" href={props.url}>
      <h4 className="bg-lightYellow  text-center text-xl font-semibold text-backgroundBrown hover:bg-white ">
        <span
          className="flex content-center p-0.5 tracking-widest justify-center"
          style={{
            background: `url(${bgLeft}) no-repeat left top / contain, url(${bgRight}) no-repeat right top / contain`,
          }}
        >
          <img
            className="h-4 ms-4 me-2 my-1.5"
            src={props.imageUrl}
            alt={props.imageUrl}
          />
          <p>{props.title}</p>
        </span>
      </h4>
    </a>
  );
};

export default LightBanner;
