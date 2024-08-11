import { useState } from "react";
const Contact = () => {
  const [sum1, setsum1] = useState(0);
  const [sum2, setsum2] = useState(0);
  const [total, settotal] = useState(0);
  return (
    <>
      <h1 className="font-bold m-4 p-4 text-lg">Sum : {total}</h1>

      <input
        className="border border-black m-4"
        type="number"
        onChange={(e) => {
          setsum1(e.target.value);
        }}
      ></input>

      <input
        className="border border-black m-4"
        type="number"
        onChange={(e) => {
          setsum2(e.target.value);
        }}
      ></input>
      <button
        className="bg-gray-400 py-1 px-3 rounded-md"
        onClick={() => {
          settotal(parseInt(sum1) + parseInt(sum2));
        }}
      >
        Add
      </button>
    </>
  );
};

export default Contact;
