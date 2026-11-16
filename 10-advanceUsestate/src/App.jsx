import React, { useState } from "react";

const App = () => {
  let [num, setnum] = useState(0);

  return (
    <div>
      <h1>
        {num}
      </h1>
      <button
        onClick={() => {
          setnum(prev =>(prev + 1))
          setnum(prev =>(prev + 1))
          setnum(prev =>(prev + 1))
        }}
      >
        Click me{" "}
      </button>
    </div>
  );
};

export default App;
