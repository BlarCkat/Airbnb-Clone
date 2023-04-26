import Image from "next/image";

const LargeCard = ({image, title, description, actionText}) => {
    return ( 
        <>
            <div className="relative h-[60vh] cursor-pointer flex flex-col items-center md:items-start p-4 hover:bg-neutral-50 transition rounded-xl">
                <div className="relative w-full h-full">
                    <Image src={image} fill="true" className="bottomLargeCard rounded-xl"/>
                </div>
                <div className="absolute top-0 p-12 flex flex-col w-full sm:w-auto sm:items-center md:items-start">
                    <h2 className="text-3xl">{title}</h2>
                    <p>{description}</p>
                    <button className="py-2 px-4 bg-red-400 rounded-full text-white my-4">{actionText}</button>
                </div>
            </div>
        </>
     );
}
 
export default LargeCard;