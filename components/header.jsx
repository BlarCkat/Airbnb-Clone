import Image from "next/image";
import { HiGlobeAlt, HiMenu, HiSearch, HiUserCircle } from "react-icons/hi";
import { FaAirbnb } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const HeaderComponent = () => {

    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);

    return ( 
        <>
        <header className="z-50 bg-transparent absolute w-full py-2 px-4 shadow-sm md:px-8 flex flex-row justify-between items-center">
            <div className=" relative flex items-center h-fit w-fit gap-2 text-red-500 font-bold">
                {/* <Image src={'/img/airbnb-logo.jpg'} width={90} height={40} className="cursor-pointer"/> */}
                <FaAirbnb size={32} className="text-white"/>
                <p className="text-white">airbnb</p>
            </div>
            
            <div className="flex flex-row justify-between items-center bg-white rounded-full border-2 border-neutral-50 px-2 py-2 shadow-sm w-[50%]">
                <input type="text" name="search" id="search" placeholder="Start your Search" className="bg-transparent outline-none w-full px-4" value={searchInput} onChange={(event)=>(setSearchInput(event.target.value))}/>
                <HiSearch className="bg-red-400 md:inline-flex text-white p-2 rounded-full h-8 w-8 cursor-pointer"/>
            </div>
            
            {/* right */}
            <div className=" text-white flex flex-row gap-4 items-center justify-end">
                <p className="hidden md:inline font-bold cursor-pointer">Become a Host</p>
                <HiGlobeAlt size={20}/>

                <div className="flex flex-row bg-white text-neutral-500 gap-2 border-2 p-2 rounded-full hover:shadow-md transition">
                    <HiMenu size={20}/>
                    <Link href={'/profile'}>
                    <HiUserCircle size={20}/>
                    </Link>
                </div>
            </div>
            {searchInput && (
                <div className="absolute z-30 top-0 left-0 h-[100vh] w-[90vw] flex flex-row justify-center mt-[64px]">
                    <div className="bg-white w-fit h-fit px-12 py-12 rounded-xl">
                    <h2>Calendar content</h2>
                </div>
                </div>
            )}

        </header>
        </>
     );
}
 
export default HeaderComponent;