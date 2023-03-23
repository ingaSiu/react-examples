import { TextField } from '@mui/material';
import useDebounce from './useDebounce';
import usePreviousValue from './usePreviousValue';
import { useState } from 'react';

const HookExample = () => {
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name, 1000);
  const previousValue = usePreviousValue(debouncedName);

  return (
    <div>
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name: {name}</p>

      <p>My name with debounce {debouncedName}</p>
      <p>My previous name: {previousValue}</p>
    </div>
  );
};

export default HookExample;
