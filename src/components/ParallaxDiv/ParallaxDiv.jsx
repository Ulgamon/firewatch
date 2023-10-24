const ParallaxDiv = ({ imageUrl }) => {
  return (
    <div
      className="w-full h-[1038px]"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "auto 1038px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom center",
      }}
    />
  );
};

export default ParallaxDiv;
