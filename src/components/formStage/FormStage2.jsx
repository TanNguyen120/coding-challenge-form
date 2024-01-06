'use client';
import React, { useContext } from 'react';
import FormProgress from '../FormProgress';
import FormButton from '../FormButton';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FormContext } from '../form';

const FormStage2 = () => {
  const { setFormStage } = useContext(FormContext);
  const { formStage } = useContext(FormContext);
  return (
    <AnimatePresence>
      {formStage == 2 && (
        <motion.div
          initial={{ x: 200, z: -10, opacity: 0 }}
          animate={{ x: 0, z: 20, opacity: 1 }}
          exit={{ x: -200, z: -10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'tween' }}
          className='flex flex-col items-start'
        >
          <div className=' text-2xl md:text-sm text-[#5F5F68] pt-5  text-left overflow-auto break-words'>
            Kostenloser Solarstrom-Check in einer Minute.
          </div>
          <div className=' flex flex-col pt-2 text-black '>
            <div className=' text-3xl md:text-xl break-words'>
              Besitzt Ihr Haus Gauben oder Dachfenster?
            </div>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 w-full'>
            <FormButton labelName={`Ja`} imgSrc={'/gaubenB.svg'} />
            <FormButton labelName={`Nein`} imgSrc={'/keineGaubenB.svg'} />
            <FormButton labelName={`Weiß nicht`} imgSrc={'/anderes.png'} />
          </div>
          <div className=' pl-2 pt-6'>
            <div
              className='flex justify-between w-fit h-fit py-[1.45px] hover:cursor-pointer'
              onClick={() => setFormStage((prev) => prev - 1)}
            >
              <Image
                height={22.4}
                width={22.4}
                alt='arrow icon'
                src={'/backBtn.png'}
              />
              <span className=' ml-[3px] text-sm text-[#5F5F68]'>Zurück</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormStage2;
