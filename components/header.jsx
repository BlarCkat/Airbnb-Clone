import Image from "next/image";
import { HiGlobeAlt, HiMenu, HiSearch, HiUserCircle } from "react-icons/hi";
import { FaAirbnb } from "react-icons/fa";

const HeaderComponent = () => {
    return ( 
        <>
        <header className="z-50 bg-transparent relative w-full py-2 px-4 shadow-sm md:px-8 flex flex-row justify-between items-center">
            <div className=" relative flex items-center h-fit w-fit gap-2 text-red-500 font-bold">
                {/* <Image src={'/img/airbnb-logo.jpg'} width={90} height={40} className="cursor-pointer"/> */}
                <FaAirbnb size={32}/>
                <p className="">airbnb</p>
            </div>
            
            <div className="flex flex-row justify-between items-center bg-white rounded-full border-2 border-neutral-50 px-2 py-2 shadow-sm w-[50%]">
                <input type="text" name="search" id="search" placeholder="Start your Search" className="bg-transparent outline-none w-full px-4"/>
                <HiSearch className="bg-red-400 md:inline-flex text-white p-2 rounded-full h-8 w-8 cursor-pointer"/>
            </div>
            
            {/* right */}
            <div className=" text-neutral-400 flex flex-row gap-4 items-center justify-end">
                <p className="hidden md:inline">Become a Host</p>
                <HiGlobeAlt size={20}/>

                <div className="flex flex-row bg-white text-neutral-500 gap-2 border-2 p-2 rounded-full hover:shadow-md transition">
                    <HiMenu size={20}/>
                    <HiUserCircle size={20}/>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default HeaderComponent;