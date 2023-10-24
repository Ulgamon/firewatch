import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from "../../assets/background.png";
import jungle1 from "../../assets/jungle1.png";
import jungle2 from "../../assets/jungle2.png";
import jungle3 from "../../assets/jungle3.png";
import jungle4 from "../../assets/jungle4.png";
import jungle5 from "../../assets/jungle5.png";
import mountains from "../../assets/mountains.png";
import manonmountain from "../../assets/man_on_mountain.png";
import logoland from "../../assets/logo_land.png";
import ParallaxDiv from "../ParallaxDiv/ParallaxDiv";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";

const ParallaxComponent = () => {
  return (
    <Parallax className="bg-backgroundBrown" pages={3.2} style={{ top: "0", left: "0" }}>
      <NavBar />

      <ParallaxLayer speed={0.02} offset={0}>
        <ParallaxDiv imageUrl={background} />
      </ParallaxLayer>

      <ParallaxLayer speed={-0.25} offset={0}>
        <ParallaxDiv imageUrl={logoland} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.05} offset={0}>
        <ParallaxDiv imageUrl={mountains} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.16} offset={0}>
        <ParallaxDiv imageUrl={jungle1} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.26} offset={0}>
        <ParallaxDiv imageUrl={jungle2} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.36} offset={0}>
        <ParallaxDiv imageUrl={jungle3} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.49} offset={0}>
        <ParallaxDiv imageUrl={jungle4} />
      </ParallaxLayer>

      <ParallaxLayer speed={0.69} offset={0}>
        <ParallaxDiv imageUrl={manonmountain} />
      </ParallaxLayer>

      <ParallaxLayer speed={1} factor={3.1} offset={0}>
        <div className="flex flex-col w-full overflow-show">
          <ParallaxDiv imageUrl={jungle5} />
          <MainContent />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxComponent;
