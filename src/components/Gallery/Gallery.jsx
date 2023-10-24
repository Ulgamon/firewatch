import galleryContext from "../../context/GalleryContext";
import { useContext } from "react";
import { createPortal } from "react-dom";
import buttonLeft from "../../assets/galleryImages/buttonLeft.svg";
import closeButton from "../../assets/galleryImages/closeButton.svg";

const BackDrop = () => {
  const { closeGallery } = useContext(galleryContext);
  return createPortal(
    <div
      onClick={closeGallery}
      className="z-20 overflow-hidden bg-black opacity-80 w-full hover:cursor-zoom-out h-screen fixed top-0 start-0"
    ></div>,
    document.getElementById("backdrop")
  );
};

const Gallery = () => {
  const galleryCtx = useContext(galleryContext);
  return createPortal(
    <div
      className="w-full flex justify-center z-30 mx-auto fixed top-[20%] md:top-[10%] xl:top-[2%]"
      id="TOJICA"
    >
      <div className="absolute text-galleryText font-serif flex items-center w-full max-w-[1300px] mx-auto">
        <button
          className="h-16 active:translate-y-0.5 w-10"
          onClick={galleryCtx.prevImage}
        >
          <div
            className="h-16 w-10"
            style={{
              backgroundImage: `url(${buttonLeft})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </button>
        <div className="flex grow flex-col justify-start content-center">
          <button
            className="hover:cursor-zoom-out ms-auto my-3"
            onClick={galleryCtx.closeGallery}
          >
            <div
              className="h-3 w-3"
              style={{
                backgroundImage: `url(${closeButton})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </button>
          <img
            onClick={galleryCtx.nextImage}
            className="w-full hover:cursor-pointer"
            src={galleryCtx.images[galleryCtx.currentImageIndex]}
            alt={galleryCtx.images[galleryCtx.currentImageIndex]}
          />
          <p className="text-xs ms-auto my-1">
            {galleryCtx.currentImageIndex + 1} of {galleryCtx.images.length}
          </p>
        </div>
        <button
          className="h-16 active:translate-y-0.5 w-10"
          onClick={galleryCtx.nextImage}
        >
          <div
            className="h-16 rotate-180 w-10"
            style={{
              backgroundImage: `url(${buttonLeft})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </button>
      </div>
    </div>,
    document.getElementById("gallery")
  );
};

const GalleryPackage = () => {
  const { isOpen } = useContext(galleryContext);

  if (isOpen) {
    return (
      <>
        <BackDrop />
        <Gallery />
      </>
    );
  } else {
    return <div />;
  }
};

export default GalleryPackage;
