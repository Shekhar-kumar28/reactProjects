import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker' key={index}>
                            <h1 className='uppercase text-6xl leading-6xl tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-medium'>{item}</h1>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className="text-md font-light tracking-tight leading-none" key={index}>{item}</p>
                ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-lg uppercase rounded-full'>Start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'><span className='rotate-[45deg]'><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

