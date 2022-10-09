import { useState } from "react";

const Toggel = () => {
  const [show, setShow] = useState(true);

  const hiden = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? <h1>Hariom Maurya</h1> : null}

      <button onClick={hiden}>Toggel</button>
    </>
  );
};
export default Toggel;
