import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1);

  async function displayData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setuserData(response.data);
  }

  let printUseData = "No user Data";

  if (userData.length > 0) {
    printUseData = userData.map(function (e) {
      return (
        <Card e = {e}/>
      );
    });
  }

  useEffect(function () {
    displayData();
  }, [index]);

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex flex-wrap gap-2">{printUseData}</div>
      <div className="flex p-5  justify-center">
        <button
          className=" text-black rounded-xl px-4 py-2 m-2 cursor-pointer active: scale-95 bg-amber-300"
          onClick={() => {

            if(index > 1)
            setindex(index - 1);
          }}
        >
          Prev
        </button>
        <h1 className=" flex justify-center items-center ">Page {index}</h1>
        <button
          className="text-black rounded-xl px-4 py-2 m-2 cursor-pointer active: scale-95 bg-amber-300"
          onClick={() => {
            setindex(index + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
