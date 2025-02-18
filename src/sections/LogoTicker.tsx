import Image from 'next/image';
import FirstLogo from '@/assets/logo-acme.png';
import SecondLogo from '@/assets/logo-quantum.png';
import ThirdLogo from '@/assets/logo-echo.png';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient[to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={FirstLogo}
              className="logo-ticker-image"
              alt="Devi School Logo"
            />
            <Image
              src={SecondLogo}
              className="logo-ticker-image"
              alt="Sikaai Logo"
            />
            <Image
              src={ThirdLogo}
              className="logo-ticker-image"
              alt="Sikaai Abroad Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

