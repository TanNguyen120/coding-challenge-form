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
  const [lastX, setLastX] = useState(0);
  const [lastWidth, setLastWidth] = useState(0);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (!isBack) {
      switch (formStage) {
        case 1:
          setWidth(10);
          setX(10);
          setLastX(0);
          setLastWidth(0);
          setPercent(10);
          break;
        case 2:
          setWidth(50);
          setX(50);
          setLastX(10);
          setLastWidth(10);
          setPercent(50);
          break;
        case 3:
          setWidth(90);
          setX(90);
          setLastX(50);
          setLastWidth(50);
          setPercent(95);
          break;
        default:
          break;
      }
    } else {
      switch (formStage) {
        case 1:
          setWidth(10);
          setX(10);
          setLastX(50);
          setLastWidth(50);
          setPercent(10);
          break;
        case 2:
          setWidth(50);
          setX(50);
          setLastX(90);
          setLastWidth(90);
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
      className={` flex flex-col py-2 px-6 md:px-0 pl-4 w-full`}
    >
      <motion.div
        key={lastX}
        initial={{ width: `${lastX}%` }}
        animate={{ width: `${x}%` }}
        transition={{ duration: 1, delay: 0.3, type: 'tween' }}
        className='z-40 '
      >
        <div className=' w-fit -mr-10 ml-auto relative flex flex-col items-center'>
          <div className='  text-xs pb-2  text-center'>
            {percent}% {percent == 90 && 'Fast'} geschafft
          </div>
          <div className=' absolute -bottom-5 z-10  '>
            <Image width={20} height={20} src={`/GroupCheck.png`} alt='svg' />
          </div>
        </div>
      </motion.div>
      <div className='relative py-2 w-full'>
        <div className=' w-full  h-1 bg-[#64D59F] opacity-25'></div>
        <motion.div
          key={lastWidth}
          initial={{ width: `${lastWidth}%` }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: 0.3, type: 'tween' }}
          className=' absolute z-10 top-2 h-1 bg-[#64D59F]'
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default FormProgress;
