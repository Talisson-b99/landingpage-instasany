"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import Mockup from "/public/mockup-main.png";
import Card01 from "/public/image-01.png";
import Card02 from "/public/image-02.png";
import Card03 from "/public/image-03.png";
import Card04 from "/public/image-04.png";
import Card05 from "/public/image-05.png";
import Card06 from "/public/image-06.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionCards = () => {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const cardRef01 = useRef(null);
  const cardRef02 = useRef(null);
  const cardRef03 = useRef(null);
  const cardRef04 = useRef(null);
  const cardRef05 = useRef(null);
  const cardRef06 = useRef(null);

  const section = sectionRef.current;

  function animateCard(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "center center",
        },
      }
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;
    const card01 = cardRef01.current;
    const card02 = cardRef02.current;
    const card03 = cardRef03.current;
    const card04 = cardRef04.current;
    const card05 = cardRef05.current;
    const card06 = cardRef06.current;

    const leftImages = [card01, card02, card03];
    const rightImages = [card04, card05, card06];

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
          end: "",
        },
      }
    );

    animateCard(leftImages, 50);
    animateCard(rightImages, -50);
  }, []);

  return (
    <>
      <section className="w-full pb-20" ref={sectionRef}>
        <Image
          src={Mockup}
          alt=""
          className=" sticky top-56 z-10 opacity-0 left-1/2 -translate-x-1/2 -mt-[32rem] mb-16"
          ref={mockupRef}
        />

        <h2
          ref={titleRef}
          className="font-semibold opacity-0 text-7xl leading-[108px] text-black text-center"
        >
          Faça <span className="text-[#719D96] mb-56">você</span> mesmo de casa
        </h2>

        <div className="w-full mx-auto max-w-[1320px] h-[562px] mt-56 relative">
          <Image
            ref={cardRef01}
            src={Card01}
            alt=""
            className="absolute top-6 left-[184px] opacity-0"
          />
          <Image
            ref={cardRef02}
            src={Card02}
            alt=""
            className="absolute top-[264px] opacity-0"
          />
          <Image
            ref={cardRef03}
            src={Card03}
            alt=""
            className="absolute bottom-0 left-[337px] opacity-0"
          />
          <Image
            ref={cardRef04}
            src={Card04}
            alt=""
            className="absolute top-0 right-[139px]  opacity-0"
          />
          <Image
            ref={cardRef05}
            src={Card05}
            alt=""
            className="absolute bottom-[111px] right-0 opacity-0"
          />
          <Image
            ref={cardRef06}
            src={Card06}
            alt=""
            className="absolute bottom-0 right-[334px] opacity-0"
          />
        </div>
      </section>
    </>
  );
};

export default SectionCards;
