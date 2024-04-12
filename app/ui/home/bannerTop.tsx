import React from 'react';
import Image from 'next/image';
import theme_icon from '../../../public/theme_icon.svg';

const BannerTop = () => {
  return (
    <div className='flex justify-between items-center p-3'>
      <p className='font-bold'>Home</p>
      <Image src={theme_icon} alt='Theme Icon' width={18} height={18} />
    </div>
  );
};

export default BannerTop;
