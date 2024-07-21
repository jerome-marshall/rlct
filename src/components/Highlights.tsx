import type { GetImageResult } from "astro"
import React from "react"
import Slider from "react-slick"

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
  }

  const settingsRTL: React.ComponentProps<typeof Slider> = {
    ...commonSettings,
    rtl: true,
  }

  return (
    <div className="module-m">
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
  )
}

const RenderImage = ({ image }: { image: GetImageResult }) => {
  return (
    <div className="px-2">
      <div className="rounded-xl overflow-hidden aspect-square">
        <img src={image.src} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Highlights
