import { useContext } from "react";
import galleryContext from "../../context/GalleryContext";

const GalleryList = () => {
  const { images, openGallery } = useContext(galleryContext);
  return (
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 max-w-[900px] gap-x-12 gap-y-10 mx-auto">
      {images.map((imagePath, index) => {
        return (
          <img
            key={index}
            className="hover:cursor-pointer opacity-90 hover:opacity-100"
            src={imagePath}
            onClick={() => openGallery(index)}
            alt={imagePath}
          />
        );
      })}
    </div>
  );
};

export default GalleryList;
