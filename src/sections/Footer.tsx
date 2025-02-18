import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialYt from '@/assets/social-youtube.svg';
export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f98bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image
            src={logo}
            height={40}
            alt="Viskraft Logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6">
          <a href="#services">Our Services</a>
          <a href="https://yourschoolsoftware.com/scheduleMeetingPage">
            Contact Us
          </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.instagram.com/yourschoolsoftwares/">
            <SocialInsta />
          </a>
          <a href="https://www.linkedin.com/showcase/your-school-softwares/">
            <SocialLinkedin />
          </a>
          <a href="https://www.youtube.com/@Yourschoolsoftware">
            <SocialYt />
          </a>
        </div>
        <p className="mt-6">&copy; 2023 Viskraft, All rights reserved.</p>
      </div>
    </footer>
  );
};

