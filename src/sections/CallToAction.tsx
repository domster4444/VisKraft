'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SpringImage from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Transform Your Institution Today</h2>
          <p className="section-description mt-5">
            Empower your school or business with VisKraft cutting-edge web-based
            school management software, innovative branding and marketing
            solutions, and seamless website development.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="https://viskraft.com/contact" target="_blank">
            <button className="btn btn-primary">Contact Us</button>
          </a>

          <a href="https://viskraft.com/schedule-meeting" target="_blank">
            <button className="btn btn-text gap-1">
              <span>Schedule A Meeting</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

