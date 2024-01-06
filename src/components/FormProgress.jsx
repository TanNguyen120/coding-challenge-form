import Image from 'next/image';
import React from 'react';

const FormProgress = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative flex flex-col items-center ml-16 w-fit '>
        <div className=' text-[#5F5F68] text-xs pb-3  text-center'>
          {' '}
          10% geschafft
        </div>
        <div className=' absolute -bottom-3 z-10  '>
          <Image width={20} height={20} src={`/GroupCheck.png`} alt='svg' />
        </div>
      </div>
      <div className='relative'>
        <div className=' w-[52.125rem] h-1 bg-[#64D59F] opacity-25'></div>
        <div className=' absolute z-10 top-0 w-24 h-1 bg-[#64D59F]'></div>
      </div>
    </div>
  );
};

export default FormProgress;