'use client';
import React, { useContext } from 'react';
import FormProgress from '../FormProgress';
import FormButton from '../FormButton';
import { AnimatePresence, motion } from 'framer-motion';
import { FormContext } from '../form';
import Image from 'next/image';

const slidingAnimation1 = {
  hidden: {
    x: -300,
    z: 0,
    opacity: 0,
    transition: { delay: 0.3, duration: 0.3 },
  },
  show: {
    x: 0,
    z: 20,
    opacity: 1,
    transition: { delay: 0, duration: 0.3 },
  },
  gone: {
    x: -300,
    z: 0,
    opacity: 0,
    transition: { delay: 0, duration: 0.3 },
  },
};

const slidingAnimation2 = {
  hidden: {
    x: 300,
    z: 0,
    opacity: 0,
    transition: { delay: 0.3, duration: 0.3 },
  },
  show: {
    x: 0,
    z: 20,
    opacity: 1,
    transition: { delay: 0, duration: 0.3 },
  },
  gone: {
    x: 300,
    z: 0,
    opacity: 0,
    transition: { delay: 0, duration: 0.3 },
  },
};

const FormStage = () => {
  const { formStage, setFormStage, formData, isBack, setIsBack } =
    useContext(FormContext);
  return (
    <AnimatePresence mode='wait'>
      <motion.div className='flex flex-col items-start z-20  relative'>
        <div className=' text-2xl md:text-sm text-[#5F5F68] pt-5  text-left overflow-auto break-words'>
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <AnimatePresence>
          {formStage == 1 && (
            <motion.div
              variants={slidingAnimation1}
              key={1}
              initial={'hidden'}
              animate={'show'}
              exit={'gone'}
              className='flex flex-col items-start w-full absolute top-16 md:top-6 '
            >
              <div className=' flex flex-col pt-2 text-black'>
                <div className=' text-3xl md:text-xl break-words'>
                  Welche Dachform hat Ihr Haus?
                </div>
              </div>
              <div className=' grid grid-cols-1 md:grid-cols-4 gap-5 pt-5 w-full '>
                <FormButton
                  labelName={`Satteldach`}
                  imgSrc={'/satteldach.png'}
                />
                <FormButton labelName={`Flachdach`} imgSrc={'/flachdach.svg'} />
                <FormButton labelName={`Pultdach`} imgSrc={'/pultdach.svg'} />
                <FormButton labelName={`Anderes`} imgSrc={'/anderes.png'} />
              </div>
              {formData.dachForm && (
                <div
                  className='flex justify-between w-fit h-fit hover:cursor-pointer  mr-2 ml-auto bg-blue-500 text-white px-3 py-2 rounded-lg mt-3'
                  onClick={() => {
                    setFormStage((prev) => prev + 1);
                    setIsBack(false);
                  }}
                >
                  <span className=' ml-[3px] text-sm text-white '>Weiter</span>
                  <Image
                    height={22.4}
                    width={22.4}
                    alt='arrow icon'
                    src={'/backBtn.png'}
                    className=' rotate-180'
                  />
                </div>
              )}
            </motion.div>
          )}

          {formStage == 2 && (
            <motion.div
              variants={slidingAnimation2}
              key={2}
              initial={'hidden'}
              animate={'show'}
              exit={'gone'}
              className='flex flex-col items-start w-full absolute top-16 md:top-6'
            >
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
                  onClick={() => {
                    setFormStage(1);
                    setIsBack(true);
                  }}
                >
                  <Image
                    height={22.4}
                    width={22.4}
                    alt='arrow icon'
                    src={'/backBtn.png'}
                  />
                  <span className=' ml-[3px] text-sm text-[#5F5F68]'>
                    Zurück
                  </span>
                </div>
              </div>
            </motion.div>
          )}
          {formStage == 3 && (
            <motion.div
              variants={slidingAnimation1}
              key={3}
              initial={'hidden'}
              animate={'show'}
              exit={'gone'}
              className='flex flex-col items-start w-full absolute top-16 md:top-6'
            >
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
                  onClick={() => {
                    setFormStage(2);
                    setIsBack(true);
                  }}
                >
                  <Image
                    height={22.4}
                    width={22.4}
                    alt='arrow icon'
                    src={'/backBtn.png'}
                  />
                  <span className=' ml-[3px] text-sm text-[#5F5F68]'>
                    Zurück
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormStage;
