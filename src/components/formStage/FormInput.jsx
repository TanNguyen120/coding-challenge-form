import React, { useContext, useState } from 'react';
import { FormContext } from '../form';

const FormInput = () => {
  const { formData } = useContext(FormContext);
  const [inputData, setInputData] = useState({
    name: '',
    herr: false,
    frau: false,
    telephonenumber: '',
    postleitzahl: 0,
    ort: '',
    strasse: '',
    hausnummer: 0,
  });
  const [validateObj, setValidateObj] = useState({});
  // InputChange Handle
  const handleInputChange = (event) => {
    // clear validate
    setValidateObj({});
    switch (event.target.name) {
      case 'telefonnummer':
        const phoneVal = event.target.value;
        if (phoneVal.length == 1) {
          setInputData({ ...inputData, telephonenumber: '+49 ' + phoneVal });
          break;
        }
        let phoneNumb = phoneVal.slice(4);
        if (phoneNumb.length > 3 && phoneNumb[3] !== ' ') {
          phoneNumb =
            phoneNumb.substr(0, 3) +
            ' ' +
            phoneNumb.substr(3, phoneNumb.length);
        }
        const inputResult = phoneNumb == '' ? '' : '+49 ' + phoneNumb;
        setInputData({ ...inputData, telephonenumber: inputResult });
        break;
      case 'frau':
        setInputData({ ...inputData, frau: true, herr: false });
        break;
      case 'herr':
        setInputData({ ...inputData, frau: false, herr: true });
        break;
      default:
        setInputData({ ...inputData, [event.target.name]: event.target.value });
        break;
    }
    console.log(inputData);
  };

  // POST HANDLE
  const handlePostFormData = async () => {
    // Validate Some Value Here
    if (inputData.name == '') {
      setValidateObj({ ...validateObj, name: true });
      // end the function too
      return;
    }
    const apiPhone = inputData.telephonenumber.slice(4).trim();
    // Phone validate Bonus
    if (/[a-zA-Z]/g.test(apiPhone)) {
      // Validation failed
      setValidateObj({ ...validateObj, phone: true });
      // end the function too
      return;
    }
    const genderVal = inputData.frau ? 'frau' : 'herr';
    const sanitizeInputData = {
      name: inputData.name,
      anrede: genderVal,
      telephonenumber: apiPhone,
      postleitzahl: inputData.postleitzahl,
      stadt: inputData.ort,
      strasse: inputData.strasse,
      hausnummer: inputData.hausnummer,
      dachform: formData.dachForm,
      dachfenster: formData.dachFenster,
    };

    try {
      const response = await fetch(
        'https://65590262e93ca47020a9fce8.mockapi.io/insert',
        {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(sanitizeInputData), // body data type must match "Content-Type" header
        }
      );
      const result = await response.json();
      alert('Success: \n' + JSON.stringify(result));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className=' w-[430px] bg-inherit mx-auto'>
      <form className=' w-fit mx-auto  rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label
            className='block text-[#5F5F68] text-sm font-bold mb-2'
            for='radio-choose'
          >
            Anrede
          </label>
          <div className=' flex gap-4 items-start'>
            <div className='flex items-center' id='radio-choose'>
              <input
                id='default-radio-1'
                type='radio'
                value='herr'
                name='herr'
                checked={inputData.herr}
                onChange={(e) => handleInputChange(e)}
                className=' w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  '
              ></input>
              <label
                for='default-radio-1'
                className='ms-2 text-lg font-medium text-gray-700 dark:text-gray-300'
              >
                Herr
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='default-radio-2'
                type='radio'
                value='frau'
                name='frau'
                checked={inputData.frau}
                onChange={(e) => handleInputChange(e)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  '
              ></input>
              <label
                for='default-radio-2'
                className='ms-2 text-lg font-medium text-gray-700 dark:text-gray-300'
              >
                Frau
              </label>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='flex items-baseline gap-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='name'
            >
              Name
            </label>
            <p
              className={`${
                validateObj.name ? '' : ' hidden '
              } text-xs text-[#CD4218]`}
            >
              Bitte Vor- und Nachnamen angeben
            </p>
          </div>
          <input
            className={`h-12 appearance-none border   rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              validateObj.name ? 'border-[#CD4218]' : ' border-[#BDC5CD]'
            }`}
            id='name'
            type='text'
            placeholder='Vor- und Nachname'
            name='name'
            value={inputData.name}
            onChange={(e) => handleInputChange(e)}
            required
          ></input>
        </div>
        <div className=' mb-1 md:w-[410px] mx-auto'>
          <div className='flex items-baseline gap-4'>
            <label
              className='block text-[#5F5F68] text-sm font-bold mb-2'
              for='telefonnummer'
            >
              Telefonnummer
            </label>
            <p
              className={`${
                validateObj.phone ? '' : ' hidden '
              } text-xs text-[#CD4218]`}
            >
              Falsches Telefonformat
            </p>
          </div>
          <input
            className={` h-12 appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
            ${validateObj.phone ? 'border-[#CD4218]' : ' border-[#BDC5CD]'}
            `}
            id='telefonnummer'
            type='tel'
            value={inputData.telephonenumber}
            onChange={(e) => handleInputChange(e)}
            placeholder='+49 123 456 789'
            name='telefonnummer'
          ></input>
          {/* <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p> */}
        </div>
        <div className='mb-1 md:w-[410px] mx-auto'>
          <label
            className='block text-[#5F5F68] text-sm font-bold mb-2'
            for='postleitzahl'
          >
            Postleitzahl
          </label>
          <input
            className=' h-12 appearance-none border border-[#BDC5CD]  rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='postleitzahl'
            type='number'
            value={inputData.postleitzahl}
            onChange={(e) => handleInputChange(e)}
            name='postleitzahl'
          ></input>
          {/* <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p> */}
        </div>
        <div className='mb-1 md:w-[410px] mx-auto'>
          <label
            className='block text-[#5F5F68] text-sm font-bold mb-2'
            for='ort'
          >
            Ort
          </label>
          <input
            className=' h-12 appearance-none border border-[#BDC5CD]  rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='ort'
            name='ort'
            value={inputData.ort}
            onChange={(e) => handleInputChange(e)}
          ></input>
          {/* <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p> */}
        </div>
        <div className=' flex items-center gap-2'>
          <div className='mb-1 md:w-2/3 mx-auto'>
            <label
              className='block text-[#5F5F68] text-sm font-bold mb-2'
              for='strasse'
            >
              Straße
            </label>
            <input
              className=' h-12 appearance-none border border-[#BDC5CD]  rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='strasse'
              name='strasse'
              value={inputData.strasse}
              placeholder='Straße'
              onChange={(e) => handleInputChange(e)}
            ></input>
            {/* <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p> */}
          </div>
          <div className='mb-1 mx-auto'>
            <label
              className='block text-[#5F5F68] text-sm font-bold mb-2'
              for='hausnummer'
            >
              Hausnummer
            </label>
            <input
              className=' h-12 appearance-none border border-[#BDC5CD]  rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='hausnummer'
              name='hausnummer'
              type='number'
              value={inputData.hausnummer}
              placeholder='Nr'
              onChange={(e) => handleInputChange(e)}
            ></input>
            {/* <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p> */}
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className=' w-full mx-2 md:mx-auto md:w-[410px] h-14 bg-[#02FF83] rounded-[32px] hover:bg-green-400 font-semibold'
            type='button'
            onClick={() => {
              handlePostFormData();
            }}
          >
            Ja, das ist mein Hausdach.
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
