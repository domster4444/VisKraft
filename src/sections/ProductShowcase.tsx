import Image from 'next/image';
import PyramidImage from '@/assets/pyramid.png';
import ProductImage from '@/assets/product-image.png';
import TubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Empower Your Institution</div>
          </div>
          <h2 className="section-title mt-5">
            Transform Education with Smart Solutions
          </h2>
          <p className="section-description mt-5">
            VisKraft provides cutting-edge web-based school management software,
            innovative branding and marketing strategies, and seamless website
            development to help schools and institutions thrive in the digital
            age.
          </p>
        </div>
        <div className="relative">
          <Image alt="product image" src={ProductImage} className="mt-10" />
          <Image
            alt="pyramid image"
            src={PyramidImage}
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            alt="tube image"
            src={TubeImage}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
