"use client";

import { useEffect, useRef } from "react";

import { FilePen } from "lucide-react";
import Container from "./container";
import Image from "next/image";

import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import Mockup from "/public/mockup.svg";
import gsap from "gsap";

const SectionHero = () => {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        duration: 0.7,
        y: 0,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -12,
        duration: 0.7,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 12,
        duration: 0.7,
      }
    );
  }, []);

  return (
    <section className="bg-green-primary bg-hero bg-no-repeat bg-top">
      <Container>
        <div className="flex flex-col justify-center items-center pt-16">
          <div
            ref={textHeroRef}
            className="flex flex-col items-center opacity-0"
          >
            <h3 className="text-center text-green-light font-medium text-2xl ">
              Novo curso focado em instagram
            </h3>
            <h1 className="text-center text-white font-semibold leading-[6.75rem] text-7xl  mt-4 mb-2.5">
              Destrave as suas habilidades
            </h1>
            <div className="flex items-center gap-10">
              <button className="flex items-center gap-2">
                <FilePen className="size-6 text-green-light" />
                <span className="text-white font-medium transition-all duration-300 hover:underline">
                  Assinar lista de espera
                </span>
              </button>
              <button className="font-bold text-green-primary px-6 py-3 shadow-sm shadow-green-light bg-green-neon/80 rounded-full transition-all duration-300 hover:bg-green-neon/100 ">
                Começar agora
              </button>
            </div>
            <div className="w-full max-w-[53.4375rem] h-[6.625rem] relative">
              <Image src={IconHand} alt="" className="absolute bottom-0" />

              <Image
                src={IconHand02}
                alt=""
                className="absolute top-0 right-0"
              />
            </div>
          </div>
          <div className="overflow-hidden w-full max-w-[912px] h-[450px] relative">
            <Image
              src={Mockup}
              alt=""
              className="absolute left-16 top-4"
              ref={mockupLeftRef}
            />
            <Image
              src={Mockup}
              alt=""
              className="absolute right-16 top-4"
              ref={mockupRightRef}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHero;
