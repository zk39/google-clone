"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
const router = useRouter();
const [input,setInput] = useState("");
const [loading,setloading] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
    }

    async function randomSearch(e){
        setloading(true);
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res)=>res.json())
        .then((data)=> data[0])
        if(!response) return
       
        router.push(`/search/web?searchTerm=${response}`)
        setloading(false)
    }

  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-[90%]
        border 
        border-gray-200 
         
         rounded-full 
         hover:shadow-md 
         transition-shadow 
         px-5 py-3 
         focus-within:shadow-md 
         sm:max-w-xl lg:max-w-2xl"

         onSubmit={handleSubmit}
      >
        <AiOutlineSearch onClick={handleSubmit} className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" onChange={(e)=>{
            setInput(e.target.value)
            }}
            value={input}
            />
        <BsFillMicFill className="text-xl" />
      </form>

      <div
        className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 
        justify-center sm:flex-row mt-8"
      >
        <button onClick={handleSubmit} className="btn">Google Search</button>
        <button disabled={loading} onClick={randomSearch} className="btn disabled:opacity-80 flex items-center justify-center">
            {/* set loading effect while fetching random words */}
            {loading ?(
                <img src="loading.svg" alt="loading..." className="h-6 text-center"/>
            ) :(" I Am Feeling Lucky")       
        }
           </button>
      </div>
    </>
  );
}
