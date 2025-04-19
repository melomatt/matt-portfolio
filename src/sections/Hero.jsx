import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image set behind other content */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Two-column layout for hero content and professional photo */}
      <div className="hero-layout flex flex-col md:flex-row items-center md:px-20 px-5 py-16">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-1/2 w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                From{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:w-12 md:w-10 w-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>of Code to Lifelines </h1>
              <h1>of Innovation</h1>
            </div>

            <p className="text-white md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Matthias, a Liberian developer with a passion for digital
              transformation.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: Professional Photo */}
        <div className="relative -mt-10 md:mt-0 md:w-1/2 w-full flex justify-center items-center">
  <div className="relative inline-block">
    <img
      src="/images/me3.png"
      alt="Professional Photo of Matthias"
      className="w-full h-auto max-w-xs md:max-w-sm object-cover shadow-xl rounded-md"
    />
    {/* Diffused gradient overlay */}
    <div
      className="absolute bottom-0 left-0 w-full h-10"
      style={{
        background: "linear-gradient(to top, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.75) 40%, rgba(17, 24, 39, 0.2) 70%, rgba(17, 24, 39, 0) 100%)"
      }}
    ></div>
  </div>
</div>


      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
