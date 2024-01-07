'use client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FormContext } from './form';
// Animation Variations
const btnLabelMotion = {
  rest: {
    color: '#0A2742',
    backgroundColor: '#ffffff',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: '#f9fafb',
    backgroundColor: '#0a2742',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  tap: {
    color: '#f9fafb',
    backgroundColor: '#0a2742',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const btnTextLabelMotion = {
  rest: {
    y: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    y: 24,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const btnIconLabelMotion = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const FormButton = ({ imgSrc, labelName }) => {
  const { formData, setFormData, setFormStage, formStage, isBack, setIsBack } =
    useContext(FormContext);
  const [chosenValue, setChosenValue] = useState('');
  // Get the current form value by switch case
  useEffect(() => {
    switch (formStage) {
      case 1:
        setChosenValue(formData.dachForm);
        break;
      case 2:
        setChosenValue(formData.dachFenster);
      default:
        break;
    }
  }, [formData.dachFenster, formData.dachForm, formStage]);
  // Handle button click
  const clickHandle = (label) => {
    switch (formStage) {
      case 1:
        setFormData({ ...formData, dachForm: label });
        break;
      case 2:
        setFormData({ ...formData, dachFenster: label });
      default:
        break;
    }
    setIsBack(false);
    setFormStage((prev) => prev + 1);
  };

  return (
    <>
      {labelName == chosenValue ? (
        <div
          className='w-full h-full flex md:flex-col flex-row items-center group rounded-[10px] bg-white hover:cursor-pointer border border-slate-800 drop-shadow-2xl'
          onClick={() => {
            clickHandle(labelName);
          }}
        >
          <div className=' px-9 py-4 scale-110'>
            <Image width={120} height={108} src={imgSrc} alt='button-image' />
          </div>
          <div
            className={` w-full h-full md:min-h-20 text-center md:rounded-tr-none md:rounded-b-lg rounded-r-lg bg-[#0a2742] flex items-center md:items-start`}
          >
            <div
              className=' mx-auto my-auto text-[#f9fafb]'
              variants={btnTextLabelMotion}
            >
              {labelName}
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={'rest'}
          animate={'rest'}
          whileHover={'hover'}
          whileTap={'tap'}
          className='w-full h-full flex md:flex-col flex-row items-center group rounded-[10px] bg-white hover:cursor-pointer border hover:border-slate-800 drop-shadow-2xl'
          onClick={() => {
            clickHandle(labelName);
          }}
        >
          <motion.div variants={btnIconLabelMotion} className=' px-9 py-4'>
            <Image width={120} height={108} src={imgSrc} alt='button-image' />
          </motion.div>
          <motion.div
            layout
            variants={btnLabelMotion}
            className={` w-full h-full md:min-h-20 text-center  md:rounded-tr-none md:rounded-b-lg rounded-r-lg flex items-center md:items-start`}
          >
            <motion.div className=' mx-auto' variants={btnTextLabelMotion}>
              {labelName}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FormButton;
