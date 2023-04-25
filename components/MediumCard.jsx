import Image from "next/image";

const MediumCard = ({key, image, title}) => {
    return ( 
        <>
        <div className="cursor-pointer hover:bg-neutral-50 p-3 transition ease-in-out rounded-xl">
            <div className="relative h-[300px] w-[300px]">
                <Image src={image} fill={'true'} className="rounded-xl"/>
            </div>
            <h2 className="font-bold text-lg">{title}</h2>
        </div>
        </>
     );
}
 
export default MediumCard;