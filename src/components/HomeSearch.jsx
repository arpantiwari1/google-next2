"use client"
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
function HomeSearch() {
  const [input, setInput] = useState('');
  const router=useRouter();
const handleSubmit=(e)=>{
    e.preventDefault();
    if(!input) return;
    router.push(`/search/web?searchTerm=${input}`)

}
 const  randomSearch=async(e)=>{
    e.preventDefault();
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    console.log(data[0]);
    if(!data[0]) return;
    router.push(`/search/web?searchTerm=${data[0]}`)
}
  return (
    <>
      <form
      onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto maxflex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full 
        hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          name=""
          id=""
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
        </form>

      {/* //button */}
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button onClick={handleSubmit} className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow">
          Google Search
        </button>


        <button onClick={randomSearch} className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm">
          I am feeling lucky
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
