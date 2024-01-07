'use client';
import React, { useContext, useEffect, useState } from 'react';
import FormProgress from '../FormProgress';
import FormButton from '../FormButton';
import { AnimatePresence, motion } from 'framer-motion';
import { FormContext } from '../form';
import Image from 'next/image';
import FormInput from './FormInput';

const slidingAnimation = {
  show: {
    x: [-300, 0],
    z: [0, 20],
    opacity: [0, 1],
    transition: { delay: 0, duration: 0.3 },
  },
  gone: {
    x: -300,
    z: 0,
    opacity: 0,
    transition: { delay: 0, duration: 0.3 },
  },
};

const middleSlide = {
  show: (isBack) => {
    return {
      x: isBack ? [-300, 0] : [300, 0],
      z: [0, 20],
      opacity: [0, 1],
      transition: { delay: 0, duration: 0.3 },
    };
  },
  gone: (isBack) => {
    return {
      x: isBack ? -300 : 300,
      z: 0,
      opacity: 0,
      transition: { delay: 0, duration: 0.3 },
    };
  },
};

const FormStage = () => {
  const { formStage, setFormStage, formData, isBack, setIsBack } =
    useContext(FormContext);

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div className='flex flex-col items-start z-20  relative h-fit'>
        <div
          className={` text-2xl md:text-sm text-[#5F5F68] pt-5  text-left overflow-auto break-words ${
            formStage >= 3 && ' hidden h-0'
          }`}
        >
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <AnimatePresence>
          {formStage == 1 && (
            <motion.div
              variants={slidingAnimation}
              key={1}
              initial={'hidden'}
              animate={'show'}
              exit={'gone'}
              className='flex flex-col items-start w-full md:absolute top-16 md:top-8 '
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
                    setIsBack(false);
                    setFormStage((prev) => prev + 1);
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
              custom={isBack}
              key={2}
              animate={'show'}
              exit={'gone'}
              variants={middleSlide}
              className='flex flex-col items-start w-full md:absolute top-20 md:top-11'
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
              <div className=' flex justify-between w-full'>
                <div className=' pl-2 pt-6'>
                  <div
                    className='flex justify-between w-fit h-fit py-[1.45px] hover:cursor-pointer'
                    onClick={async () => {
                      setIsBack(true);
                      setFormStage((prev) => prev - 1);
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
                {formData.dachFenster && (
                  <div
                    className='flex justify-between w-fit h-fit hover:cursor-pointer  mr-2 ml-auto bg-blue-500 text-white px-3 py-2 rounded-lg mt-3'
                    onClick={async () => {
                      setIsBack(false);
                      setFormStage((prev) => prev + 1);
                    }}
                  >
                    <span className=' ml-[3px] text-sm text-white '>
                      Weiter
                    </span>
                    <Image
                      height={22.4}
                      width={22.4}
                      alt='arrow icon'
                      src={'/backBtn.png'}
                      className=' rotate-180'
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
          {formStage == 3 && (
            <motion.div
              variants={slidingAnimation}
              key={3}
              animate={'show'}
              exit={'gone'}
              className='flex flex-col items-center bg-[#000D19]  w-full border-t border-slate-100 '
            >
              <div className=' flex items-center  my-auto  h-[7.037rem]'>
                <div className='w-full  text-white flex flex-col items-center text-center'>
                  <div className=' md:text-sm '>
                    Eine Solaranlage spart Ihnen ca.
                  </div>
                  <div className=' md:text-xl'>25.000-30.000 € Stromkosten</div>
                </div>
                <div className='my-auto'>
                  <Image src={'/iIcon.svg'} alt='icon' width={15} height={15} />
                </div>
              </div>
              <div className=' px-5 pt-3 bg-[#F1F1F2] flex flex-col items-center'>
                <div className=' mx-auto w-3/4 break-words text-[#0A2742] text-center text-lg font-semibold'>
                  Gratulation, das Angebot ist in Ihrer Region noch verfügbar!
                  Wir senden Ihnen gerne kostenlose Informationen zu.
                </div>
                <FormInput className='mx-auto' />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormStage;
