import React from 'react';
import FormProgress from '../FormProgress';
import FormButton from '../FormButton';

const FormStage1 = () => {
  return (
    <div>
      <div className='flex flex-col items-start'>
        <div className=' text-sm text-[#5F5F68] pt-5  text-left'>
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <div className=' flex flex-col pt-2 text-black'>
          <div className=' text-xl'>Welche Dachform hat Ihr Haus?</div>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-2 pt-5'>
          <FormButton labelName={`Satteldach`} imgSrc={'/satteldach.png'} />
        </div>
      </div>
    </div>
  );
};

export default FormStage1;
