import Image from "next/image";

const SmallCard = ({key, image, locationName, time}) => {

    // const key = key;
    // const image = image;
    // const locationName = locationName;
    // const time = time;

    return ( 
        <>
        <div className="flex flex-row gap-4 items-center hover:bg-neutral-50 transition ease-in-out duration-200 hover:scale-105 cursor-pointer p-2 m-2 rounded-xl">
            <div className="relative h-16 w-16">
            <Image src={image} fill="true" className="rounded-xl"/>
            </div>
            <div className="flex flex-col">
                <h2>{locationName}</h2>
                <p className="text-neutral-400">{time}</p>
            </div>
        </div>
        </>
     );
}
 
export default SmallCard;