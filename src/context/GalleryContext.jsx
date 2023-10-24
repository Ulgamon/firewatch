import { createContext, useState } from "react";
import pic1 from "../assets/galleryImages/firewatch_01.jpg";
import pic2 from "../assets/galleryImages/firewatch_02.jpg";
import pic3 from "../assets/galleryImages/firewatch_03.jpg";
import pic4 from "../assets/galleryImages/firewatch_04.jpg";

const galleryContext = createContext({
  images: [],
  nextImage: () => {},
  prevImage: () => {},
  openGallery: () => {},
  closeGallery: () => {},
  isOpen: false,
  currentImageIndex: 0,
});

export const GalleryContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const galleryImages = [pic1, pic2, pic3, pic4];

  const nextImage = () => {
    if (currentImage + 1 >= galleryImages.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevState) => prevState + 1);
    }
  };

  const prevImage = () => {
    if (currentImage - 1 < 0) {
      setCurrentImage(galleryImages.length - 1);
    } else {
      setCurrentImage((prevState) => prevState - 1);
    }
  };

  const openGallery = (imageIndex) => {
    setCurrentImage(imageIndex);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const value = {
    images: galleryImages,
    nextImage: nextImage,
    prevImage: prevImage,
    openGallery: openGallery,
    closeGallery: closeGallery,
    isOpen: isOpen,
    currentImageIndex: currentImage,
  };

  return (
    <galleryContext.Provider value={value}>
      {props.children}
    </galleryContext.Provider>
  );
};

export default galleryContext;
