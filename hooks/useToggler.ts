import { useState } from 'react';

const useToggler = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const toggler = () => {
    setToggle(!toggle);
  };

  return {
    toggle,
    toggler,
  };
};

export default useToggler;
