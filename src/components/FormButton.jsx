import Image from 'next/image';
import React from 'react';

const FormButton = ({ imgSrc, labelName }) => {
  return (
    <div className='w-full h-full flex flex-col items-center group rounded-[10px] bg-white hover:cursor-pointer border hover:border-slate-800 '>
      <div className=' px-9 pb-4'>
        <Image width={120} height={108} src={imgSrc} alt='button-image' />
      </div>
      <div className=' w-full pt-2 pb-12 text-[#0A2742]  group-hover:bg-[#0a2742] group-hover:text-[#f9fafb] group-hover:pt-5 text-center'>
        {labelName}
      </div>
    </div>
  );
};

export default FormButton;
