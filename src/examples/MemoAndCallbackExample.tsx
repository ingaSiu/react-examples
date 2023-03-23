import { useCallback, useMemo, useState } from 'react';

import { Button } from '@mui/material';

// The fundamental idea with useMemo is that it allows us to “remember” a computed value between renders.

// array with 100 objects
const array = [{ value: 10 }, { value: 10 }, { value: 10 }, { value: 10 }];

const Example = () => {
  const [clicked, setClicked] = useState(false);
  const a = useMemo(() => {
    array.reduce((prev, curr) => curr.value + prev, 0);
  }, []);

  const b = useCallback(() => {}, []);

  const sum = array.reduce((prev, curr) => curr.value + prev, 0);
  console.log(sum);
  console.log('memo:', a);
  return (
    <>
      <Button onClick={() => setClicked(true)}>Click me</Button>
      {sum}
    </>
  );
};

export default Example;
