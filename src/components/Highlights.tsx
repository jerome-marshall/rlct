import type { GetImageResult } from "astro";
import React from "react";
import Slider from "react-slick";

const Highlights = ({ images }: { images: GetImageResult[] }) => {
  const commonSettings: React.ComponentProps<typeof Slider> = {
    arrows: false,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: false,
    centerPadding: "24px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settingsRTL: React.ComponentProps<typeof Slider> = {
    ...commonSettings,
    rtl: true,
  };

  return (
    <div className="module-m overflow-hidden">
      <h2 className="text-center">
        Training{" "}
        <span className="marker-underline font-secondary text-primary">
          Highlights
        </span>
      </h2>
      <div className="highlight-slider-container mt-16">
        <Slider {...settingsRTL}>
          {images.map((image, index) => (
            <RenderImage key={index} image={image} />
          ))}
        </Slider>
        <Slider {...commonSettings} className="mt-4 translate-x-[140px]">
          {images.map((image, index) => (
            <RenderImage key={index} image={image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const RenderImage = ({ image }: { image: GetImageResult }) => {
  return (
    <div className="px-2">
      <div className="aspect-square overflow-hidden rounded-xl">
        <img
          src={image.src}
          className="h-full w-full object-cover"
          alt="hightlight-image"
        />
      </div>
    </div>
  );
};

export default Highlights;
