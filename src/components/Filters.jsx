import React from 'react'
import { useState } from "react";

function Filters() {
    const [selectedItem,setSelectedItem] = useState(1);
  return (
    <section className='border border-black my-10 py-3 w-3/5  md:w-4/6 mx-auto flex flex-col md:flex-row justify-around ' >
        <button onClick={() => setSelectedItem(1)} 
        className={`font-body border border-slate-300 py-3 px-16 rounded-full transform hover:scale-110 duration-100 my-3 md:my-0 m-2 ${selectedItem === 1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={() => setSelectedItem(2)}
        className={`font-body border border-slate-300 py-3 px-16 rounded-full transform hover:scale-110 duration-100 my-3 md:my-0 m-2 ${selectedItem === 2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Best Seller</button>
        <button onClick={() => setSelectedItem(3)}
         className={`font-body border border-slate-300 py-3 px-16 rounded-full transform hover:scale-110 duration-100 my-3 md:my-0 m-2 ${selectedItem === 3 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Special</button>

    </section>
    
  )
}

export default Filters