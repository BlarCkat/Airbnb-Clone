import { HiArrowLeft, HiUser } from "react-icons/hi";
import HeaderComponent from "../components/header";

const ProfileView = () => {
    return ( 
        <>
        <main className="p-[100px]">
        <header>
            <div className="rounded-full hover:bg-neutral-100 h-fit w-fit p-4 cursor-pointer">
            <HiArrowLeft/>
            </div>
            <h1 className="text-2xl">Profile</h1>

        </header>
            <div className="flex flex-col gap-2 items-start py-10">
                <div className="profile-image-container h-[50px] w-[50px] flex flex-col items-center justify-center bg-neutral-50 rounded-lg shadow-lg">
                    <HiUser size={32}/>
                </div>
                <span className="flex flex-row gap-2"><p className="text-gray-400">Name:</p><h2>Giselle Almora</h2></span>
            </div>

        </main>
        </>
     );
}
 
export default ProfileView;