import Image from "next/image";

const Banner = () => {
    return ( 
        <>
        <div className="relative h-[300px] md:h-[400px] lg:h-[600px] xl:h-[90vh] bg-neutral-50 w-full flex flex-row items-center justify-center">
            <Image src={'/img/illustration_banner.jpeg'} fill="true" className="homeBanner"/>

            <div className="absolute bottom-32 left-32 text-center text-white flex flex-col items-start gap-2">
                <p className="text-[32px] ">Not sure where to go?<br/> Perfect.</p>
                <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:shadow-xl transition font-bold active:scale-90 active:bg-red-600 active:text-white">I'm flexible</button>
            </div>
        </div>
        </>
     );
}
 
export default Banner;