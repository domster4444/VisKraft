import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
const pricingTiers = [
  {
    title: 'Branding & Marketing',
    buttonText: 'Contact Us',
    popular: false,
    inverse: false,
    features: [
      'Custom branding strategy',
      'Social media marketing',
      'SEO optimization',
      'Content creation',
      'Basic analytics and reporting',
      'Dedicated marketing consultant',
    ],
  },
  {
    title: 'Website Development',
    buttonText: 'Contact Us',
    popular: true,
    inverse: true,
    features: [
      'Custom website design',
      'Custom CMS integration ',
      'Responsive and mobile-friendly',
      'Ongoing maintenance and support',
      'Advanced analytics integration',
      'SEO optimization',
      'PWA Support',
    ],
  },
  {
    title: 'School Management Software',
    buttonText: 'Contact Us',
    popular: false,
    inverse: false,
    features: [
      '48 Modules',
      'Custom School Website',
      'Student information management',
      'Attendance tracking',
      'Admit & Id card management',
      'Timetable and scheduling',
      'Parent and teacher portals',
      'Hostel management system',
      'Customizable dashboards',
      'Cloud-based storage',
      '24/7 technical support',
      'API access for integrations',
    ],
  },
];

export const Service = () => {
  return (
    <section id="services" className="pt-8">
      <section className="py-24">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title ">Our Services</h2>
            <p className="section-description mt-5">
              View our services we offer at viskraft either its website or
              marketing or fully fledged erp we are ready to deliver to you.
            </p>
          </div>

          <div>
            {/* card */}
            <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
              {pricingTiers.map(
                ({ title, buttonText, popular, inverse, features }, index) => {
                  return (
                    <div
                      key={index}
                      className={twMerge(
                        'p-10 border border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full',
                        inverse === true &&
                          ' border-black bg-black text-white/60'
                      )}
                    >
                      <div className="flex justify-between">
                        <h3
                          className={twMerge(
                            'text-lg font-bold text-black/50',
                            inverse === true && 'text-white/60'
                          )}
                        >
                          {title}
                        </h3>

                        {popular === true && (
                          <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                            <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] bg-clip-text text-transparent text-md ">
                              Popular
                            </span>
                          </div>
                        )}
                      </div>

                      <a
                        href="https://yourschoolsoftware.com/scheduleMeetingPage"
                        target="_blank"
                      >
                        <button
                          className={twMerge(
                            'btn btn-primary w-full mt-[30px]',
                            inverse === true && 'bg-white text-black'
                          )}
                        >
                          {buttonText}
                        </button>
                      </a>

                      <ul className="flex flex-col gap-5 mt-8">
                        {features.map((feature, index) => {
                          return (
                            <li
                              className="text-sm flex items-center gap-4"
                              key={index}
                            >
                              <CheckIcon className="h-6 w-6" />
                              <span>{feature}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

