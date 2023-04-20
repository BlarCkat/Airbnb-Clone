import Image from "next/image";
import { HiSearch } from "react-icons/hi";

const HeaderComponent = () => {
    return ( 
        <>
        <header className="z-50 sticky bg-white py-2 px-4 shadow-sm md:px-8 grid grid-cols-3">
            <div className=" relative flex items-center h-fit w-fit">
                <Image src={'/img/airbnb-logo.jpg'} width={90} height={40} className="cursor-pointer"/>
            </div>
            
            <div className="flex flex-row items-center">
                <input type="search" name="search" id="search" placeholder="Start your Search" />
                <HiSearch className="bg-red-400 text-white p-2 rounded-full h-8 w-8 cursor-pointer"/>
            </div>
            
            {/* right */}
        </header>
        </>
     );
}
 
export default HeaderComponent;