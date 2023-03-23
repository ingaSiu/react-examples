import { Button } from '@mui/material';
import useToggle from './hooks/useToggle';

const ToggleExample = () => {
  const [isVisible, setToggle] = useToggle();
  return (
    <>
      <Button variant="outlined" onClick={setToggle}>
        Click me
      </Button>
      {isVisible && <h1>Hello</h1>}
    </>
  );
};

export default ToggleExample;
