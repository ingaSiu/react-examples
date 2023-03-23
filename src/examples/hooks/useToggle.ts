import { MouseEventHandler, useState } from 'react';

const useToggle = (initialState = false): [boolean, MouseEventHandler<HTMLButtonElement>] => {
  const [state, setState] = useState<boolean>(initialState);

  const handleToggle = (): void => setState(!state);

  return [state, handleToggle];
};

export default useToggle;
