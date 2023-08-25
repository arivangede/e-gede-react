import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-2 bg-sky-300 text-sky-900 text-2xl rounded-xl shadow-lg border hover:bg-sky-200"
          onClick={() => setCounter((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <h1 className="m-4 text-2xl">{counter}</h1>
        <button
          className="px-4 py-2 bg-sky-300 text-sky-900 text-2xl rounded-xl shadow-lg border hover:bg-sky-200"
          onClick={() => setCounter((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
