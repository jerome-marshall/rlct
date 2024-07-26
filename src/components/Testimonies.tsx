import React from "react";
import quote from "@/assets/quote.svg";
import Slider from "react-slick";

interface TestimoniesProps {}

const Testimonies = () => {
  const testimonials = [
    {
      name: "John Samuel",
      title: "Student, Batch #1",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      quote:
        "I believe it's through the plan of God that I could come and join this very special training.  I have learnt a lot of new things in a practical way, in both medical knowledge and spiritual development and a clear deep insight.  My life has changed and improved... I highly believe that God will use me in a different way to approach to many people in winning their souls.... My greatest desire will be to go back home and share all these applicable methods and teachings.  It will be my powerful instrument in my future ministry and for future reference too. ",
    },
    {
      name: "Peter Raj",
      title: "Student, Batch #2",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      quote:
        "I didn't know the reason of diabetes before but now I got a full picture, the reasons about that disease and other diseases too. Now I have an idea to treat them.  Also hydrotherapy and massage are a great help not only for me but also for helping others.",
    },
    {
      name: "Esther David",
      title: "Student, Batch #2",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      quote:
        "There are so many things I learnt here that I never knew before, medical knowledge as well as spiritual insight. Never in my entire life did I think I would have such an opportunity to learn all these things.  My whole view of life has changed.",
    },
    {
      name: "Rebecca Michael",
      title: "Student, Batch #2",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      quote:
        "I'm so happy and blessed to be a part of this course.  Every day God taught me new life-changing lessons and He helped me to execute them in my life.",
    },
    {
      name: "Daniel George",
      title: "Student, Batch #2",
      quote:
        "When I first heard about this training I wanted to join and heal myself from my disease.  But after I came, I learnt that to be a medical missionary is not only healing the physical sickness but also spiritual healing. I feel like I must do something.",
    },
    {
      name: "Lydia Joseph",
      title: "Student, Batch #2",
      quote:
        "In this course I learned many things which I already knew but I have realized the application in my life. One thing was that I knew about the Sanctuary but I never understood and felt the need of it in my life.  I always thought it was a ritual in olden days. Here I came to know that it should be applied in my life today.",
    },
  ];

  const commonSettings: React.ComponentProps<typeof Slider> = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease",
    centerPadding: "24px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="module-p container">
      <h2 className="relative text-center">
        <span className="marker-underline font-secondary text-primary">
          Testimonial
        </span>{" "}
        Spotlight
        <br />
      </h2>
      <p className="mx-auto max-w-[700px] pt-6 text-center">
        Discover how this course has transformed lives through personal stories
        and impactful experiences. See how our holistic approach to health
        ministry fosters growth and achievement.
      </p>
      <div className="testimonials-slider pt-10 md:pt-14">
        <Slider {...commonSettings} className="">
          {testimonials.map((testimonial) => (
            <div className="relative h-full rounded-xl bg-background p-6 shadow-md">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center">
                  <div className="relative mr-4 flex size-14 items-center justify-center overflow-hidden rounded-full bg-background-green shadow-sm">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt="testimonial"
                        className="h-full w-full rounded-full"
                        width={64}
                        height={64}
                      />
                    ) : (
                      <p className="font-secondary text-lg uppercase text-primary-foreground">
                        {testimonial.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg leading-none">{testimonial.name}</h3>
                    <p className="pt-1 text-xs font-semibold text-primary">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <img src={quote.src} alt="quote" className="size-10" />
              </div>
              <p className="line-clamp-[8] overflow-hidden text-ellipsis pt-4">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonies;
