import Image from "next/image";
import { HiGlobeAlt, HiMenu, HiSearch, HiUserCircle } from "react-icons/hi";

const HeaderComponent = () => {
    return ( 
        <>
        <header className="z-50 sticky bg-white py-2 px-4 shadow-sm md:px-8 grid grid-cols-3">
            <div className=" relative flex items-center h-fit w-fit">
                <Image src={'/img/airbnb-logo.jpg'} width={90} height={40} className="cursor-pointer"/>
            </div>
            
            <div className="flex flex-row justify-between items-center rounded-full border-2 border-neutral-50 px-2 shadow-sm w-fit lg:w-auto">
                <input type="text" name="search" id="search" placeholder="Start your Search" className="bg-transparent outline-none flex-grow px-4"/>
                <HiSearch className="bg-red-400 md:inline-flex text-white p-2 rounded-full h-8 w-8 cursor-pointer"/>
            </div>
            
            {/* right */}
            <div className=" text-neutral-500 flex flex-row gap-4 items-center justify-end">
                <p>Become a Host</p>
                <HiGlobeAlt size={20}/>

                <div className="flex flex-row gap-2 border-2 p-2 rounded-full hover:shadow-md transition">
                    <HiMenu size={20}/>
                    <HiUserCircle size={20}/>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default HeaderComponent;