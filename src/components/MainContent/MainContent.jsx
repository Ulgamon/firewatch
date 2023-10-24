import LightBanner from "../UI/LightBanner/LightBanner";
import HeaderAvailable from "./HeaderAvailable/HeaderAvailable";
import ps4 from "../../assets/ps4.png";
import switchBuy from "../../assets/switch.png";
import xbox from "../../assets/xbox.png";
import pc from "../../assets/buyicon.png";
import YouTubeFrame from "./YoutubeFrame/YouTubeFrame";
import SectionDescription from "./SectionDescription/SectionDescription";
import DarkBanner from "../UI/DarkBanner/DarkBanner";
import GalleryList from "../Gallery/GalleryList";
import camposanto from "../../assets/camposanto.svg";

const MainContent = () => {
  return (
    <div className="w-full bg-backgroundBrown">
      <HeaderAvailable />
      <div className="sm:w-11/12 grid md:grid-cols-2 grid-cols-1 gap-12 max-w-[700px] mx-auto mb-32 my-16">
        <ul className="col-span-1 w-3/4 sm:w-1/2 mx-auto md:w-full">
          <li className="mb-8">
            <LightBanner
              imageUrl={pc}
              url={"https://store.steampowered.com/app/383870/Firewatch/"}
              title="WINDOWS MAC LINUX"
            />
          </li>
          <li className="">
            <LightBanner
              imageUrl={ps4}
              url={"https://store.playstation.com/en-us/search/firewatch"}
              title="PLAYSTATION 4"
            />
          </li>
        </ul>
        <ul className="col-span-1 w-3/4 sm:w-1/2 mx-auto md:w-full">
          <li className="mb-8">
            <LightBanner
              imageUrl={switchBuy}
              url={
                "https://www.nintendo.com/us/store/products/firewatch-switch/"
              }
              title="NINTENDO SWITCH"
            />
          </li>
          <li className="">
            <LightBanner
              imageUrl={xbox}
              url={
                "https://www.microsoft.com/en-rs/p/firewatch/bqqkg9h2stc0?rtc=1&activetab=pivot:overviewtab"
              }
              title="XBOX ONE"
            />
          </li>
        </ul>
      </div>
      <YouTubeFrame />
      <SectionDescription />
      <ul className="w-11/12 grid md:grid-cols-2 grid-cols-1 gap-12 max-w-[700px] mx-auto mb-20 my-10">
        <li className="w-3/4 mx-auto md:w-full">
          <DarkBanner
            url={"https://www.firewatchgame.com/media/"}
            title={"SCREENS & TRAILERS"}
          />
        </li>
        <li className="w-3/4 mx-auto md:w-full">
          <DarkBanner
            url={"https://www.firewatchgame.com/about/"}
            title={"FIREWATCH FAQ"}
          />
        </li>
      </ul>

      <GalleryList />

      <h3 className="text-4xl leading-[3rem] text-lightYellow text-center tracking-[0.2rem] mt-16 m-2 sm:w-3/4 mx-auto max-w-[550px]">
        "AS VISUALLY STRIKING AS ITS UNIQUE PREMISE."
      </h3>
      <h5 className="text-xl text-bold mx-auto w-5/6 text-center tracking-[0.25rem] text-navActive mt-5 mb-20">
        ENTERTAINMENT WEEKLY
      </h5>

      <ul className="w-11/12 grid md:grid-cols-2 grid-cols-1 gap-12 max-w-[900px] mx-auto">
        <li className="w-3/4 mx-auto md:w-full">
          <DarkBanner
            url={"https://help.panic.com/firewatch/"}
            title={"TECH SUPPORT"}
          />
        </li>
        <li className="w-3/4 mx-auto md:w-full">
          <DarkBanner
            url={"https://www.firewatchgame.com/about/#streaming"}
            title={"STREAMING & LET'S PLAYS"}
          />
        </li>
      </ul>
      <div className="mx-auto w-fit mt-3 tracking-[0.25rem]">
        <a
          className="text-2xl mx-auto text-bold w-min text-lightYellow hover:text-white mt-5 mb-10"
          href=""
        >
          日本語に関する情報
        </a>
      </div>
      <p className="mx-auto text-xs md:text-sm leading-7 my-10 tracking-[0.15rem] w-5/6 text-center text-navActive">
        ©2023 CAMPO SANTO, IN COOPERATION WITH PANIC.
        <br />
        FIREWATCH IS A TRADEMARK OF CAMPO SANTO.
        <br />
        NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.
      </p>
      <div className="w-32 mx-auto w-content">
        <a className="hover:fill-navActive" href="https://www.camposanto.com">
          <img style={{ stroke: "#973700" }} src={camposanto} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
