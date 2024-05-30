import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const GitHub = () => {
  const [data, setData] = useState({});
  const [userId, setUserId] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click

  useEffect(() => {
    if (!buttonClicked) return; // If button not clicked, return

    fetch(`https://leetcodestats.cyclic.app/${userId}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));

    setButtonClicked(false); // Reset buttonClicked state after fetch
  }, [buttonClicked, userId]); // Dependency on buttonClicked and userId

  return (

    <div className="text-center h-screen flex flex-col justify-center items-center text-xl text-black ">
     <div className=" border border-gray-500 p-4 w-1/2 bg-slate-500 rounded-lg">
     <div className="my-4 text-2xl font-bold">Leetcode User Details</div>
     <input
        type="text"
        placeholder="Enter User Name"
        className="mb-4 px-4 py-2 rounded-md"
        onChange={(e) => setUserId(e.target.value)}
      />
      <button
        onClick={() => setButtonClicked(true)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md font-bold"
      >
        Fetch Data
      </button>
      <div className=" text-xl">
        <h1>User Name: {userId}</h1>
        <h1>Total Solved: {data.totalSolved}</h1>
        <h1>Easy Solved: {data.easySolved}</h1>
        <h1>Medium Solved: {data.mediumSolved}</h1>
        <h1>Hard Solved: {data.hardSolved}</h1>
      </div>
     </div>
    </div>
  );
};

export default GitHub;
