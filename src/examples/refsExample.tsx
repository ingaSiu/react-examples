// useRef is a hook that lets you reference a value that's not needed for rendering

import { useRef } from 'react';

// button atlieka ta pacia funkcija kaip paspaudimas ant input

const RefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // renderiname input ir button
  // ref= {inputRef} duoda reiksme inputRef kaip input
  // handleClick inicijuoja input veiksma
  // inputRef.current => patikrina , ar uzsikabines ant sito inputo ir tuomet atlieka tam tikrus veiksmus

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
};

export default RefExample;
