import { useState, useEffect } from "react";

const Userfun = () => {
  const [currentDate, setcurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentDate(new Date());
    }, 1000);
  }, []);
  const formattedDate = currentDate.toLocaleString();
  return (
    <>
      <h1>{formattedDate}</h1>
    </>
  );
};
export default Userfun;
