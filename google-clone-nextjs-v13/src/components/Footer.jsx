import CountryLookup from "./CountryLookup"
import React from "react"
export default function Footer() {
    
  return (
   
   <footer className='absolute text-sm bottom-0 text-gray-500 
   bg-[#f2f2f2] w-full'>
    <div className=" border-b px-9 py-3">
        <CountryLookup />
    </div>

    <div className="flex flex-col sm:flex-row
    sm:space-y-0
    justify-between items-center px-8 py-3
    space-y-7">
        <ul className="flex items-center space-x-6">
            <li className="link">
                About
            </li>
            <li className="link">
                Advertising
            </li>
            <li className="link">
                Business
            </li>
            <li className="link">
                How Search works
            </li>
        </ul >
        <ul className="flex items-center space-x-6">
            <li className="link"> Privacy</li>
            <li className="link"> Terms</li>
            <li className="link">Settings</li>
        </ul>

    </div>
   </footer>
  
  )
}
