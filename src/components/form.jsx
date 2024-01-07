'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import FormProgress from './FormProgress';

import FormStage from './formStage/formStage';

// Some context for the child element
export const FormContext = createContext();

function Form() {
  const [formData, setFormData] = useState({});
  const [formStage, setFormStage] = useState(1);
  const [isBack, setIsBack] = useState();

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        setFormStage,
        formStage,
        isBack,
        setIsBack,
      }}
    >
      <div className='md:w-[58.125rem] md:h-[28,25rem] w-full h-full flex flex-col  md:p-10 bg-[#F1F1F2] my-auto font-medium z-30  '>
        <FormProgress />
        <FormStage />
      </div>
    </FormContext.Provider>
  );
}

export default Form;
