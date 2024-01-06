'use client';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';
import { FormContext } from './form';

const FormProgress = () => {
  const { formStage, isBack } = useContext(FormContext);
  // animate value based on percent
  const [x, setX] = useState(-2);
  const [width, setWidth] = useState(0);
  const [lastX, setLastX] = useState(-2);
  const [lastWidth, setLastWidth] = useState(0);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (!isBack) {
      switch (formStage) {
        case 1:
          setWidth(6);
          setX(4);
          setLastX(-2);
          setLastWidth(0);
          setPercent(10);
          break;
        case 2:
          setWidth(26.188);
          setX(24.188);
          setLastX(4);
          setLastWidth(6);
          setPercent(50);
          break;
        case 3:
          setWidth(45.519);
          setX(43.519);
          setLastX(24.188);
          setLastWidth(26.188);
          setPercent(95);
          break;
        default:
          break;
      }
    } else {
      switch (formStage) {
        case 1:
          setWidth(6);
          setX(4);
          setLastX(24.188);
          setLastWidth(26.188);
          setPercent(10);
          break;
        case 2:
          setWidth(26.188);
          setX(24.188);
          setLastX(43.519);
          setLastWidth(45.519);
          setPercent(50);
          break;
        case 3:

        default:
          break;
      }
    }
  }, [formStage, isBack]);

  return (
    <motion.div
      animate={
        formStage == 3
          ? {
              backgroundColor: '#000D19',
              color: '#ffffff',
              transition: { duration: 0.3, delay: 0.3 },
            }
          : {
              backgroundColor: '#F1F1F2',
              color: '#5F5F68',
              transition: { duration: 0.3, delay: 0.3 },
            }
      }
      className={` flex flex-col pl-4 py-2 w-full`}
    >
      <motion.div
        key={lastX}
        initial={{ x: `${lastX}rem` }}
        animate={{ x: `${x}rem` }}
        transition={{ duration: 1, delay: 0.3, type: 'tween' }}
        className='relative flex flex-col items-center w-fit '
      >
        <div className='  text-xs pb-2  text-center'>
          {percent}% {percent == 90 && 'Fast'} geschafft
        </div>
        <div className=' absolute -bottom-5 z-10  '>
          <Image width={20} height={20} src={`/GroupCheck.png`} alt='svg' />
        </div>
      </motion.div>
      <div className='relative py-2'>
        <div className=' w-full md:w-[52.125rem] h-1 bg-[#64D59F] opacity-25'></div>
        <motion.div
          key={lastWidth}
          initial={{ width: `${lastWidth}rem` }}
          animate={{ width: `${width}rem` }}
          transition={{ duration: 1, delay: 0.3, type: 'tween' }}
          className=' absolute z-10 top-2 w-24 h-1 bg-[#64D59F]'
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default FormProgress;
