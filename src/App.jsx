import GalleryPackage from "./components/Gallery/Gallery";
import MainContent from "./components/MainContent/MainContent";
import ParallaxComponent from "./components/ParallaxComponent/ParallaxComponent";
import { GalleryContextProvider } from "./context/GalleryContext";
import mobile from "./assets/keyart-mobile.jpg";
import NavBarMobile from "./components/NavBar/NavBarMobile";

function App() {
  return (
    <>
      <GalleryContextProvider>
        <div className="bg-backgroundBrown w-full relative h-screen">
          <div className="hidden md:block">
            <ParallaxComponent />
          </div>
          <div className="w-full block md:hidden h-full">
            <div
              className="w-full h-[550px] sm:h-[1000px]"
              style={{
                backgroundImage: `url(${mobile})`,
                backgroundSize: "auto 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <MainContent />
            <NavBarMobile />
          </div>
        </div>
        <GalleryPackage />
      </GalleryContextProvider>
    </>
  );
}

export default App;
