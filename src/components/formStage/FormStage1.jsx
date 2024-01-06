'use client';
import React, { useContext } from 'react';
import FormProgress from '../FormProgress';
import FormButton from '../FormButton';
import { AnimatePresence, motion } from 'framer-motion';
import { FormContext } from '../form';

const slidingAnimation = {
  hidden: {
    x: 200,
    z: -10,
    opacity: 0,
  },
};

const FormStage1 = () => {
  const { formStage } = useContext(FormContext);
  return (
    <AnimatePresence>
      {formStage == 1 && (
        <motion.div
          initial={{
            x: 200,
            z: -10,
            opacity: 0,
            transition: {
              delay: 2,
              duration: 0.5,
            },
          }}
          animate={{ x: 0, z: 20, opacity: 1 }}
          exit={{ x: -200, z: -10, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5, type: 'tween' }}
          className='flex flex-col items-start'
        >
          <div className=' text-2xl md:text-sm text-[#5F5F68] pt-5  text-left overflow-auto break-words'>
            Kostenloser Solarstrom-Check in einer Minute.
          </div>
          <div className=' flex flex-col pt-2 text-black '>
            <div className=' text-3xl md:text-xl break-words'>
              Welche Dachform hat Ihr Haus?
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-4 gap-5 pt-5 w-full'>
            <FormButton labelName={`Satteldach`} imgSrc={'/satteldach.png'} />
            <FormButton labelName={`Flachdach`} imgSrc={'/flachdach.svg'} />
            <FormButton labelName={`Pultdach`} imgSrc={'/pultdach.svg'} />
            <FormButton labelName={`Anderes`} imgSrc={'/anderes.png'} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormStage1;
