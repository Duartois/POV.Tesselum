import logo2 from '@/assets/logosaas2.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return (
    <footer className='bg-[#ff3131] text-white font-bold text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative">
          <Image src={logo2} height={100} alt='SaaS logo white' className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href='#'>About</a>
          <a href='#'>Features</a>
          <a href='#'>Customers</a>
          <a href='#'>Pricing</a>
          <a href='#'>Help</a>
          <a href='#'>Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy: 2025 Matheus Duarte, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
