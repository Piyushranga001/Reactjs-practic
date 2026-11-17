import React, { useState } from "react";

const App = () => {
  let [title, settitle] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title);
          settitle('')
        }}
        action="submit"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
