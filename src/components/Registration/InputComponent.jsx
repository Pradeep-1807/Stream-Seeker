import React, { useEffect, useState } from 'react';

const InputComponent = ({ forValue, type, value, inputName, placeholder, getValue }) => {

  const [inputValue, setInputValue] = useState({
    name:'',
    value:''
  })

 

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({
      name:name,
      value:value
    });
  }
  
  useEffect(()=>{
    const [name,value] = [inputValue.name,inputValue.value]
    getValue(name,value)
  },[inputValue])
  

  return (
    <div className='flex flex-col gap-1 w-full'>
      <label htmlFor={forValue}>{value}</label>
      <input
        type={type}
        name={inputName}
        value={inputValue[value]}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className='p-1.5 rounded-sm bg-transparent border outline-none focus:outline focus:outline-offset-1 focus:outline-pink-500 focus:border-none pl-3'
        
      />
    </div>
  );
};

export default InputComponent;
