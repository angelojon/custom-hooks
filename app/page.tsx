'use client';

import React, { useState } from "react";
import { useLocalStorage } from "./hooks";

const CustomHook = () => {
  const [value, setValue] = useState('');

  const { getItem, setItem, removeItem } = useLocalStorage('value');
  
  return (
    <>
      <h1>Custom React Hook</h1>
      <br />
      <input
        className="mb-4 text-black"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row gap-4">
        <button onClick={() => setItem(value)}>Set</button>
        <button onClick={() => console.log(getItem())}>Get</button>
        <button onClick={ removeItem }>Delete</button>
      </div>
    </>
  );
};

export default CustomHook;