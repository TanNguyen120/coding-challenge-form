import React from 'react';
import FormProgress from './FormProgress';
import FormStage1 from './formStage/FormStage1';

function Form() {
  return (
    <div className='w-[58.125rem] h-[28,25rem] flex flex-col  p-2 md:p-10 bg-[#F1F1F2] my-auto font-medium'>
      <FormProgress />
      <FormStage1 />
    </div>
  );
}

export default Form;
